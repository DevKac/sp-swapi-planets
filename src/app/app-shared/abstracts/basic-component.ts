import { isNullOrUndefined } from 'util';

export abstract class BasicComponent {
  // boolean defining if loading is currently on
  loading: boolean;
  // loading message displayed to the user
  loadingMsg: string;
  // boolean defining if error message is currently on
  error: boolean;
  // error message displayed to the user
  errorMsg: string;

  constructor () { }

  // PROTECTED REGION
  // each component should have a method of loading or updating it's data
  protected abstract updateDataFromServices();
  // End of PROTECTED REGION

  // PRIVATE REGION
  // End of PRIVATE REGION

  // PUBLIC REGION
  // show loading message with a given text. If display time is specified then hide message after this time
  public showLoading(loadingMsg: string, displayTime: number = 0) {
    this.loadingMsg = loadingMsg;
    this.loading = true;

    if (!isNullOrUndefined(displayTime) && displayTime > 0) {
      setTimeout(() => {
        this.hideLoading();
      }, displayTime);
    }
  }
  // show error message with a given text. If display time is specified then hide message after this time
  public showError(errorMsg: string, displayTime: number = 0, hideLoading = false) {
    if (hideLoading) {
      this.hideLoading();
    }

    this.errorMsg = errorMsg;
    this.error = true;

    if (displayTime && displayTime > 0) {
      setTimeout(() => {
        this.hideError();
      }, displayTime);
    }
  }
  // hide loading message
  public hideLoading() {
    this.loading = false;
    this.loadingMsg = '';
  }
  // hide error message
  public hideError() {
    this.error = false;
    this.errorMsg = '';
  }
  // End of PUBLIC REGION
}
