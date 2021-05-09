import { Component, OnInit } from '@angular/core';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';
import { environment } from 'src/environments/environment';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;
  progress = 0;

  constructor(private service: UploadFileService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  onChange(event: any) {
    console.log(event);

    const selectedFiles = event.srcElement.files as FileList;
    // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    const element =  document.getElementById('customFileLabel');

    if (element !== null) {
       element.innerHTML = fileNames.join(', ');
    }

    this.progress = 0;
  }

  // tslint:disable-next-line: typedef
  onUpload() {
    if (this.files && this.files.size > 0) {
      // this.service.upload(this.files, '/api/upload')
      this.service.upload(this.files, environment.BASE_URL + '/upload')
      // tslint:disable-next-line: ban-types
      .pipe(
        uploadProgress(progress => {
          console.log(progress);
          this.progress = progress;
        }),
        filterResponse()
      )
      .subscribe(response => console.log('Upload Concluído'));
      // .subscribe((event: HttpEvent<Object>) => {
      //   // HttpEventType
      //    console.log(event);
      //    if (event.type === HttpEventType.Response) {
      //      console.log('Upload Concluído');
      //    } else if (event.type === HttpEventType.UploadProgress && event.total) {
      //       const percentDone = Math.round((event.loaded * 100) / event.total);
      //       console.log('Progresso', percentDone);
      //       this.progress = percentDone;
      //    }
      //   });
    }
  }
}
