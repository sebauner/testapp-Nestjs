import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
    producto(a:any,b:any):number{
        console.log(a," tipo: ",typeof(a));
        console.log(b," tipo: ",typeof(b));
        return parseInt(a) * parseInt(b);
    }

    division(a:any,b:any):any{

        console.log(a," tipo: ",typeof(a));
        console.log(b," tipo: ",typeof(b));

        if(b == 0) return 'Sintax Error. No se puede dividir por 0';
        return parseInt(a) / parseInt(b);
    }

    suma(a:any,b:any):number{
        console.log(a," tipo: ",typeof(a));
        console.log(b," tipo: ",typeof(b));
        return parseInt(a) + parseInt(b);
    }

    resta(a:any,b:any):number{
        console.log(a," tipo: ",typeof(a));
        console.log(b," tipo: ",typeof(b));
        return parseInt(a) - parseInt(b);
    }
}
