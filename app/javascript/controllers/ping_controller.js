import { Controller } from "stimulus";
export default class extends Controller {
  static targets = ["pingForm"]

  pauseRequest(event) {
    event.preventDefault();

    setTimeout(() => this.saveRequestTime());

    event.detail.resume();
  }

  saveRequestTime() {
    this.requestTime = new Date().getTime();
  }

  measureLatency() {

    this.saveResponseTime();

    this.latency = this.responseTime - this.requestTime;

    console.log(`${this.latency} ms`);

    setTimeout(() => this.ping(), 1000)
  }

  saveResponseTime() {
    this.responseTime = new Date().getTime();
  }

  ping() {
    this.pingFormTarget.requestSubmit()
  }

  get requestTime() {
    return this._requestTime;
  }

  set requestTime(requestTime) {
    this._requestTime = requestTime;
  }

  get responseTime() {
    return this._responseTime;
  }

  set responseTime(responseTime) {
    this._responseTime = responseTime;
  }

  get latency() {
    return this._latency;
  }

  set latency(latency) {
    this._latency = latency;
  }
}
