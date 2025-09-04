import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';


@Component({
  selector: 'app-loader',
  imports: [],
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
