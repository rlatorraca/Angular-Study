import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';

// tslint:disable-next-line: typedef
export function filterResponse<T>() {
  return pipe(
    // tslint:disable-next-line: ban-types
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    // tslint:disable-next-line: ban-types
    map((res: HttpResponse<T> | any) => res.body)
  );
}

// tslint:disable-next-line: typedef
export function uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress && event.total) {
      cb(Math.round((event.loaded * 100) / event.total));
    }
  });
}
