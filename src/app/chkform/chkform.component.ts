import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators, ReactiveFormsModule, FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { Common } from './common';
class Item {
  constructor(public text:string,public value:string){};
      //  public text: string;
      //  public value: number;
}
class Common {
  
       public CheckboxPrefix: string;
       public Prefix: string;
}
class FormControlMetadata {
  
  
       public checkboxName: string;
       public checkboxLabel: string;
       public associateControlName: string;
       public associateControlLabel: string;
       public associateControlType: string;
       public associateControlData: Array<Item>;
}

class FormObjectToApi {
  constructor(
       private lastName: string,
       private firstName: string,
       private email: string,
       private selectedLanguages: Array<Item>) { }
}
@Component({
  selector: 'chkform',
  templateUrl: './chkform.component.html',
  styleUrls: ['./chkform.component.css']
})
export class ChkformComponent implements OnInit {

  test: any;
  name:string;
  selectedLanguageCount:number = 0;
  missingLanguage:boolean = false;
  sampleForm: FormGroup;
  langControlMetada: Array<FormControlMetadata> = [];
  programmingFormArray: FormArray;
  
  programmingLanguageList: Array<Item> = [];
  otherProgrammingLanguageList: Array<Item> = [];
  phpVersionList: Array<Item> = [];
  
  constructor(private formBuilder: FormBuilder,private http:HttpClient) {
    //this.name = `Angular v${VERSION.full}:`
    http.get("http://localhost:55475/api/values").subscribe((res:Array<string>)=>{
    res.forEach(element => {
    this.programmingLanguageList.push(new Item(element,element));
      
    }); 
    this.populateProgrammingLanguage();

    console.log(res);
    });
  }
  
  ngOnInit() {
    this.sampleForm = this.formBuilder.group({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
           // email: new FormControl('', [Validators.required,Validators.pattern(this.regEmail)]),
            programmingLanguage: this.formBuilder.array([{}])
        });
    
     //populate programming languages source
    //  this.programmingLanguageList = [ 
    //     new Item('PHP',1),
    //     new Item('JavaScript',2),
    //     new Item('C#',3),
    //     new Item('Other',4)
    //   ];
      
    //  this.otherProgrammingLanguageList = [ 
    //   new Item('Python',1),
    //   new Item('Ruby',2),
    //   new Item('C++',3),
    //   new Item('Rust',4)
    // ];
    
    // this.phpVersionList = [ 
    //   new Item('v4',1),
    //   new Item('v5',2),
    //   new Item('v6',3),
    //   new Item('v7',4)
    // ];
    
    
  }
  
  programmingLanguages(): FormArray {
    return this.sampleForm.get('programmingLanguage') as FormArray;
  };
  
  populateProgrammingLanguage() {
    //get the property
    this.programmingFormArray = this.programmingLanguages();
    
    //clear
    this.programmingFormArray.removeAt(0);

    let p:Item;
    //loop through the list and create the formarray metadata
    for (p of this.programmingLanguageList) {
      
      let control = new FormControlMetadata();
      let group = this.formBuilder.group({});
      
      //create the checkbox and other form element metadata
      control.checkboxName = `${p.value}`;
      control.checkboxLabel = p.text;
      control.associateControlName = `${p.value}`;
      control.associateControlLabel = `${p.text} comments`;
      control.associateControlType ="";// Common.ControlType[Common.ControlType.textbox];
      
            
      //store in array, use by html to loop through
      this.langControlMetada.push(control);
      
      //form contol
      let checkBoxControl = this.formBuilder.control('');
      let associateControl = this.formBuilder.control({ value: '', disabled: true });

      //add to form group [key, control]
      group.addControl(`${p.value}`, checkBoxControl);
      group.addControl(`${p.value}`, associateControl);
    //  this.test = group; 
      //add to form array
      this.programmingFormArray.push(group);
    }
  }
  
  //add/remove validator 
  languageSelectionChange(pos: number, cnkName: string, txtName: string) {
    let programmingLanguage = this.programmingLanguages();

    let control = programmingLanguage.controls[pos] as FormGroup

    if (control.controls[cnkName].value == true) {
        //checkbox checked
        control.controls[txtName].enable();
        control.controls[txtName].setValidators([Validators.required]);
        control.controls[txtName].updateValueAndValidity();
        this.selectedLanguageCount++;
    }
    else {
        //unchecked
        control.controls[txtName].setValue('');
        control.controls[txtName].disable();
        control.controls[txtName].clearValidators();
        control.controls[txtName].updateValueAndValidity();
        this.selectedLanguageCount--;
    }
  }
getselectedRoles()
{
 var roles=[];
 this.programmingLanguages().controls.forEach(element => {
   if(element.value)
   {
     roles.push(element);
   }
 });
 return roles;
}  
  //submit click
  public submit(e: any): void {
    console.log(this.sampleForm.value);
    console.log("selected roles");
    console.log(this.getselectedRoles());
    e.preventDefault();
    
     //reset 
    let selectedLanguageList: Array<Item> = [];
    let programmingLanguage = this.programmingLanguages();
    let i: number;
    //checkbox id
    let languageId: number = 0;
    
     for (i = 0; i < programmingLanguage.controls.length; i++) {

        let control = programmingLanguage.controls[i] as FormGroup
        // let selectedLanguage: Language = {} as any;

        // //get the selected checkbox id
        // for (var k in control.controls) {
        //     languageId = Number(k.replace(/[a-zA-Z_]/g, ""));
        //     break;
        }

        //capture the selected checkbox Id and textbox value
        // if (control.controls[`${Common.CheckboxPrefix}${languageId}`].value == true) {
        //     selectedLanguage.value = languageId;
        //     selectedLanguage.text = control.controls[`${Common.OtherPrefix}${languageId}`].value
        //     selectedLanguageList.push(selectedLanguage);
        // }
      }
    
    // if (selectedLanguageList.length == 0) {
    //     this.missingLanguage = true;
    // } else {
      //submit to API
      // let formObjectToApi = new FormControlMetadata("SS","SS","sS","SS","SS",[]);
      
      // formObjectToApi.lastName =this.sampleForm.controls['lastName'].value;
      // formObjectToApi.firstName =this.sampleForm.controls['firstName'].value;
      // formObjectToApi.email =this.sampleForm.controls['email'].value;
      // formObjectToApi.selectedLanguages =selectedLanguageList;
   
      // this.missingLanguage = false;
      // this.test = formObjectToApi;
    }
  


