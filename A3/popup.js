class Popup {
    constructor(url) {
      this.url = url;
      this.popup = null;
    }
  
    open() {
      this.popup = window.open(this.url, 'Registration', 'width=500,height=600');
    }
  
    close() {
      if (this.popup && !this.popup.closed) {
        this.popup.close();
      }
    }
  }