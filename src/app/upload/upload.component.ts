import { Component, OnInit ,Input, OnDestroy} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UploadService } from "../services/upload.service";
import { ConstantsService } from "../services/constants.service";
import { HttpEventType } from "@angular/common/http";
import { Subscription } from 'rxjs';
@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  @Input() fromParent:string;
  messages: string;
    subscription: Subscription;
  form: FormGroup;
  uploadResponse;
  imgName: string = "";
  progressMessage: string="";
  progress: number;
  progressLoading: boolean = false;
  setImageUrl:string="";
  constructor(
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    private constantsservice: ConstantsService
  ) {
    this.subscription = this.constantsservice.getMessage().subscribe(message => {
      if (message) {
        this.messages=message;
        console.log(message);
        this.setImageUrl=this.constantsservice.url+"uploads/"+this.messages ;
        this.imgName = message.text ;

      } else {
        // clear messages when empty message received
        this.messages = "";
      }
    });

  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      avatar: [""]
    });

  }
  onFileSelect(event) {
    this.progressMessage = "";
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get("avatar").setValue(file);
      this.imgName = file.name;
      this.progressMessage = "Upload File";
    }
  }
  onFileUpload() {
    const formData = new FormData();
    formData.append("avatar", this.form.get("avatar").value);

    this.uploadService.uploadFile(formData).subscribe(
      res => {
        this.uploadResponse = res;
        this.progressMessage = "";

        if (res.type == HttpEventType.UploadProgress) {
          this.progress = Math.round((res.loaded / res.total) * 100);
          if (this.progress > 0 || this.progress < 100) {
            this.progressLoading = true;
          } else {
            this.progressLoading = false;
          }
        } else if (res.type === HttpEventType.Response) {

          this.uploadResponse.url = res.body.url;

          //this.order.imageName = res.body.fileName;
          if (res.body.status == "success") {
            this.uploadResponse= res.body;
            this.setImageUrl = res.body.url;
            this.progressMessage = "File Uploaded";
            this.imgName =  res.body.fileName;

            this.constantsservice.imgName = this.imgName;

          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  onSubmit() {


  }
  //handling messages
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
