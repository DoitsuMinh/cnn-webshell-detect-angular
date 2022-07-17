import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public copy: string;
  data: any;
  len_file_list: any;
  len_shell_list: any;
  len_yara_list: any;
  shell_list: any;
  file_list: any;
  yara_list: any;
  status_show = false;
  show_btn = true;
  constructor(private http: HttpClient){}
  ngOnInit(): void {}
  onClickPredict(){
    alert('Running!')
    this.http.get('http://localhost:5000/check/upload').subscribe((res:any) => {
      if(res){
        this.status_show = true;
        this.show_btn = false;
        this.data = res;
        this.len_file_list = res.len_file_list;
        this.len_shell_list = res.len_shell_list;
        this.len_yara_list = res.len_yara_list;
        this.shell_list = res.shell_list;
        this.file_list = res.file_list;
        this.yara_list = res.yara_list;
        alert('Done!')
      }else{
        alert('Nothing!')
      }
    });
  }
}
