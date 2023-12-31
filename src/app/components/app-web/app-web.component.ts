import { Component, AfterViewInit } from '@angular/core'
import { DataRaw } from 'src/app/models/modelDataRaw'
import { DataWeb } from 'src/app/models/modelDataWeb'
import { dataRaw } from 'src/app/data/data-raw'

@Component({
  selector: 'app-web',
  templateUrl: './app-web.component.html',
  styleUrls: ['./app-web.component.scss']
})
export class AppWebComponent implements AfterViewInit {

  constructor() {
   this.changeAvailableChnls()
  }

  ngAfterViewInit(): void {
    this.selectChnlsRaw()
  }

  data: DataRaw = dataRaw;
  newData: DataWeb = {
    SSID: this.data.SSID,
    ChannelBonding: this.data.ChannelBonding,
    WPAKey: this.data.WPAKey,
    ExtendedChannel: this.data.ExtendedChannel === 'true',
    UseChannelLimit: this.data.UseChannelLimit === 'true',
    ChannelLimit: [],
  }

  channels = {
    cb5cb10: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165],
    cb20ec: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165],
    cb20: [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161, 165],
    cb40ec: [36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161],
    cb40: [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161],
    cb80ec: [36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161],
    cb80: [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161],
  }

  selectedChnls: number[] = []

  selectChnlsRaw() {
    if (this.data.ChannelLimit) this.data.ChannelLimit.split(' ').forEach(e => {
      const el = document.getElementById(String(e)) as HTMLInputElement;
      if (el) {
        el.checked = true;
        this.selectedChnls.push(Number(e));
        this.selectedChnls.sort((a, b) => a - b);
       } else if (!el) return
    })
  }

  selectChnls(val: number) {
     const el = document.getElementById(String(val)) as HTMLInputElement;
     if (el.checked) {
      this.selectedChnls.push(val);
      this.selectedChnls.sort((a, b) => a - b);
     } else {
      const i = this.selectedChnls.indexOf(val);
      this.selectedChnls.splice(i, 1);
     }
  }
 
  toggleAllChnls(val: boolean) {
    this.selectedChnls.splice(0, this.selectedChnls.length);
    const elements = document.getElementsByClassName('channel');
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLInputElement;
      el.checked = val;

      val ?
      this.selectedChnls.push(Number(el.value)) :
      this.selectedChnls.splice(0, this.selectedChnls.length);
    }
  }

  changeAvailableChnls() {
    this.toggleAllChnls(false);
    if (this.newData.ChannelBonding === '5' || this.newData.ChannelBonding === '10') {
      this.newData.ChannelLimit = [...this.channels.cb5cb10];
    } else if (this.newData.ChannelBonding === '20') {
      this.newData.ExtendedChannel ?
      this.newData.ChannelLimit = [...this.channels.cb20ec] :
      this.newData.ChannelLimit = [...this.channels.cb20]
    } else if (this.newData.ChannelBonding === '40') {
      this.newData.ExtendedChannel ?
      this.newData.ChannelLimit = [...this.channels.cb40ec] :
      this.newData.ChannelLimit = [...this.channels.cb40]
    } else if (this.newData.ChannelBonding === '80') {
      this.newData.ExtendedChannel ?
      this.newData.ChannelLimit = [...this.channels.cb80ec] :
      this.newData.ChannelLimit = [...this.channels.cb80]
    } else {
      this.newData.ChannelLimit = []
    }
  }

  isInvalid(val: any, element: any) {
    if (val) {
      element?.classList.add('is-invalid');
    } else {
      element?.classList.remove('is-invalid');
    }
  }

  isValid(name: string) {
    const element = document.getElementById(name);
    const param = this.newData[name as keyof typeof this.newData];
    console.log(typeof element)
    this.isInvalid(!param, element);

    if (name === "WPAKey") {
      this.isInvalid((this.newData.WPAKey.length < 8 || this.newData.WPAKey.length > 63), element)
    }
  }

  checkForm(): boolean {
    for (const name in this.newData) {
      const element = document.getElementById(name);
      const param = this.newData[name as keyof typeof this.newData];
      if ((name === 'SSID' || name === 'ChannelBonding' || name === 'WPAKey') && !param) {       
        element?.classList.add('is-invalid');
        return false 
      } else if (name === 'WPAKey' && (this.newData.WPAKey.length < 8 || this.newData.WPAKey.length > 63)) {
        element?.classList.add('is-invalid');
        return false
        } else {
          element?.classList.remove('is-invalid');
        }
    }
      return true
  }

  resetForm() {
    const form = document.getElementsByTagName('form');
    form[0].reset()
  }

  submitForm() {
    this.checkForm();
    if (this.checkForm()) {
      this.data.SSID = this.newData.SSID
      this.data.ChannelBonding = this.newData.ChannelBonding;
      this.data.WPAKey = this.newData.WPAKey;
      this.data.ExtendedChannel = String(this.newData.ExtendedChannel);
      this.data.UseChannelLimit = String(this.newData.UseChannelLimit);
      this.data.ChannelLimit = this.selectedChnls.join(' ');
      this.resetForm()
    }
    return
  }
}
