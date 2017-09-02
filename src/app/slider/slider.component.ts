import { Component, OnInit, ViewEncapsulation, ElementRef} from '@angular/core';
import {LoopInfo} from './loopInfo';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/takeWhile';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  public loopInfo: LoopInfo;
  countDown: number;

  constructor(private element: ElementRef) {
    this.loopInfo = {
      countImgs: 0,
      domImgArr: [],
      currentCount: 0,
      obsSubscriber: 0
    };
    this.countDown = 10;
  }

  ngOnInit (): void {
    this.loopInfo.countImgs = this.createImgElems( this.getImageArr(),
      this.element.nativeElement.getElementsByClassName('imageSlider')[0] );
    this.loopInfo.domImgArr = this.element.nativeElement.querySelectorAll('.imageSlider .slide');
    this.loopInfo.currentCount = this.loopInfo.countImgs - 1;
    this.loopInfo.obsSubscriber = IntervalObservable.create(2500)
      .subscribe(() => this.loopRoutine());
    IntervalObservable.create(1000)
      .takeWhile(() => this.countDown > 0)
      .subscribe(() => this.countDown--, err => console.log(err), () => window.location.href = 'http://google.com');
  }
  left(): void {
    this.loopInfo.obsSubscriber._complete();
    this.loopInfo.obsSubscriber = IntervalObservable.create(2500)
      .subscribe(() => this.loopRoutine());
    this.loopRoutine();
  }
  right(): void {
    this.loopInfo.obsSubscriber._complete();
    this.loopInfo.obsSubscriber = IntervalObservable.create(2500)
      .subscribe(() => this.loopRoutine());
    if (this.loopInfo.currentCount + 1 > this.loopInfo.countImgs - 1) {
      for (let i = 0; i < this.loopInfo.countImgs; i++) {
        this.loopInfo.domImgArr[i].setAttribute('data-slide', 'left');
      }
      this.loopInfo.currentCount = -1;
    }
    this.loopInfo.domImgArr[this.loopInfo.currentCount + 1].setAttribute('data-slide', 'right');
    this.loopInfo.currentCount++;
  }
  getImageArr(): Array<string> {
    return [
      'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
      'http://legacy.semantic-ui.com/images/demo/photo.jpg',
      'http://3milliondogs.com/blog-assets-two/2015/03/goldenlab.jpg',
      'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/crop1.JPG'
    ];
  }
  createImgElems(imgArr, parentElem): number {
    imgArr.forEach(function (value) {
      const tempDiv = document.createElement('div');
      tempDiv.style.backgroundImage = 'url("' + value + '")';
      tempDiv.setAttribute('data-slide', '');
      tempDiv.className = 'slide';
      parentElem.appendChild(tempDiv);
    });
    return imgArr.length;
  }
  loopRoutine (): void {
    this.loopInfo.domImgArr[this.loopInfo.countImgs - 1].style.zIndex = 'auto';
    if (this.loopInfo.currentCount < 0) {
      for (let i = 0; i < this.loopInfo.countImgs; i++) {
        this.loopInfo.domImgArr[i].setAttribute('data-slide', '');
      }
      this.loopInfo.currentCount = this.loopInfo.countImgs - 1;
    }
    this.loopInfo.domImgArr[this.loopInfo.currentCount].setAttribute('data-slide', 'left');
    this.loopInfo.currentCount--;
    if (this.loopInfo.currentCount < 0) {
      this.loopInfo.domImgArr[this.loopInfo.countImgs - 1].style.zIndex = -1;
      this.loopInfo.domImgArr[this.loopInfo.countImgs - 1].setAttribute('data-slide', '');
    }
  }
}
