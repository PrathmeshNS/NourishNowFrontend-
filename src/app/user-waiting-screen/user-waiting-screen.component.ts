import { Component } from '@angular/core';

@Component({
  selector: 'app-user-waiting-screen',
  templateUrl: './user-waiting-screen.component.html',
  styleUrls: ['./user-waiting-screen.component.css']
})
export class UserWaitingScreenComponent {

  title = 'nourish-now';
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    
    if (event.dataTransfer?.files.length) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }
}
