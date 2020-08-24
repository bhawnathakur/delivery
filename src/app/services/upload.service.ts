import { Injectable } from "@angular/core";
import {
  HttpClient
} from "@angular/common/http";

import { ConstantsService } from "./constants.service";
@Injectable({
  providedIn: "root"
})
export class UploadService {
  SERVER_URL: string;
  constructor(
    private httpClient: HttpClient,
    private constantsservice: ConstantsService
  ) {
    this.SERVER_URL = this.constantsservice.url;
  }

  public uploadFile(data) {
    let uploadURL = this.SERVER_URL + "upload.php";
    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: "events"
    });
  }
}
