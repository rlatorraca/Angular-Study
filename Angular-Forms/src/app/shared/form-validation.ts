import { FormArray } from "@angular/forms";

export class FormValidation {

    static requiredMinCheckbox(min = 1){
        const validator = (formArray: FormArray) => {
          /* Programacao Estruturada
          const values = formArray.controls;
          let totalCheckecd = 0;
          for (let i = 0; i < values.length; i++){
            if (values[i].value){
              totalCheckecd += 1;
            }
          }
          return totalCheckecd >= min ? null : { required: true }; */
        
    
        /* Programacao Funcional */
          const totalCheckecd = formArray.controls
            .map( v => v.value)
            .reduce( (total, current) => current ? (total + current) : total, 0);
          return totalCheckecd >= min ? null : { required: true };
        }; 
        return validator;
      }
}