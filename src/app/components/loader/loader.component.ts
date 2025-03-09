import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [NgIf],
  templateUrl: './loader.component.html',
  standalone: true,
  styleUrl: './loader.component.css',
})
export class LoaderComponent implements AfterViewInit {
  @Input() fullPage?: boolean = false;

  @ViewChild('dialog') dialog?: ElementRef;

  ngAfterViewInit() {
    if (this.fullPage) {
      this.dialog?.nativeElement.showModal();
    }
  }

  onDialogKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
    }
  }
}
