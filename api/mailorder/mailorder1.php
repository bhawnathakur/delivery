<?php
$jsonData=file_get_contents("php://input");
$data = json_decode(file_get_contents("php://input"));
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: token, Content-Type');
// Additional headers 
 $replypositive= array("report"=>"success");
$replynegative= array("report"=>"failure");

$to = $data->email; 
$mealshtml ='';
$mayarr=$data->meals;
$arrlength=count($mayarr);
for($x = 0; $x < $arrlength; $x++) {
$mealshtml .= '<tr style="margin:0 auto">
                    <th style="font-weight:400;border:1px solid #eaeaea;width:50%;padding:8px;">'.$mayarr[$x]->name.'</th>
                    <th class="dbth" style="border:1px solid #eaeaea;width:50%;padding:8px;">'.$mayarr[$x]->price.'<th>
                </tr>';

}
$total=$data->total;
$deposit=$data->deposit;
$advance=$data->advance;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './src/Exception.php';
require './src/PHPMailer.php';
$mail = new PHPMailer();
$mail->setFrom('info@mailtrap.io', 'Mailtrap');
$mail->addAddress('bhawnathakur2@gmail.com', 'Tim'); 
$mail->Subject = ' Order details from Laurus Restoranas';
$mail->isHTML(true);
$mailContent = '<body style="font-family:Roboto;width:100%;background:#eaeaea;padding:30px;">
<div class="container" style="border:1px solid silver;background:white;box-shadow:1px 1px 5px silver;max-width:700px;margin:0 auto;">
    <div class="logo" style="text-align:center;padding-top:40px;padding-bottom:40px;border-bottom:1px solid #eaeaea">
    <img src="http://laurus-restoranas.lt/ems/assets/img/laurus-logo.png" style="max-width:300px" />
</div>
<div class="YourOrder" style="width:86%;margin:0 auto;padding-top:30px;border-bottom:1px solid #eaeaea">
    <div class="OrderTable" >
        <h3 style="Font-family:Roboto;font-weight:600;padding-left:30px;padding-right:30px;margin-bottom:10px">Užsakovo informacija</h3>
        <table style="text-align:left;margin:0 auto;width:100%;padding-left:30px;padding-right:30px;padding-top:5px;padding-bottom:5px;;font-family:Roboto">
            <tr style="margin:0 auto">
                <th style="font-weight:400;border:1px solid #eaeaea;width:50%;padding:8px;">Klientas:</th>
                <th class="dbth" style="border:1px solid #eaeaea;width:50%;padding:8px;">'.$data->clientName.'</th>
            </tr>
            <tr style="margin:0 auto">
                    <th style="font-weight:400;border:1px solid #eaeaea;width:50%;padding:8px;">Užsakymo data</th>
                    <th class="dbth" style="border:1px solid #eaeaea;width:50%;padding:8px;">'.$data->dateTime.'</th>
            </tr>
            <tr style="margin:0 auto">
                    <th style="font-weight:400;border:1px solid #eaeaea;width:50%;padding:8px;">Užsakymo Tipas</th>
                    <th class="dbth" style="border:1px solid #eaeaea;width:50%;padding:8px;">'.$data->type.'</th>
            </tr>

        </table>
        <h3 style="Font-family:Roboto;font-weight:600;padding-left:30px;padding-right:30px;margin-bottom:10px">Jūsų užsakymo informacija</h3>
        <table style="text-align:left;margin:0 auto;width:100%;padding-left:30px;padding-right:30px;padding-top:5px;font-family:Roboto;border:1px">
                '.$mealshtml.'
                <tr class="totals" style="margin:0 auto;">
                        <th style="text-align:right;font-weight:400;border:1px solid #eaeaea;width:50%;padding:14px;">Viso</th>
                        <th class="dbth" style="border:1px solid #eaeaea;width:50%;padding:14px;">'.$total.'</th>
                </tr>
                <tr class="totals" style="margin:0 auto;">
                        <th style="text-align:right;font-weight:400;border:1px solid #eaeaea;width:50%;padding:14px;">Depozitas</th>
                        <th class="dbth" style="border:1px solid #eaeaea;width:50%;padding:14px;">'.$deposit.'</th>
                </tr>
                <tr class="totals" style="margin:0 auto;">
                        <th style="text-align:right;font-weight:400;border:1px solid #eaeaea;width:50%;padding:14px;">Avansas</th>
                        <th class="dbth" style="border:1px solid #eaeaea;width:50%;padding:14px;">'.$advance.'</th>
                </tr>
            </table>
            <div class="orderImage" style="padding-top:30px;padding-bottom:30px;text-align:center">
                    <img src="http://laurus-restoranas.lt/ems/assets/img/cake.jpg" style="margin:0;max-width:100%;max-height:400px" />
                </div>

            </div>
    </div>
</div>
<div class="information" style="padding-top:14px;padding-bottom:0px;text-align:center;">
    <p style="letter-spacing:1px;font-family:roboto;font-size:13px;">www.laurus-restoranas.lt</p>
</div>
</div>


</body>';
$mail->Body = $mailContent;
if($mail->send()){
   echo json_encode($replypositive); 
}else{
 echo json_encode($replynegative);
}
?>