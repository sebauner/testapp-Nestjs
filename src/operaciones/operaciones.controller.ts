import { Controller, Get, Query } from '@nestjs/common';
import { OperacionesService } from './operaciones.service';

import { 
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Operaciones')
@Controller('operaciones')
export class OperacionesController {
  constructor(private readonly operacionesService: OperacionesService) {}


  @Get('suma')
  @ApiOperation({ summary: 'Suma entre dos numeros' }) 
  @ApiResponse({ 
    status: 200,
    description: 'Suma entre dos numeros', 
  })
  suma(@Query('a') a:number, @Query('b') b:number):number{
    return this.operacionesService.suma(a,b);
  }

  @Get('producto')
  @ApiOperation({ summary: 'Producto entre dos numeros' }) 
  @ApiResponse({ 
    status: 200,
    description: 'Producto entre dos numeros', 
  })
  producto(@Query('a') a:number,@Query('b') b:number):number{
    return this.operacionesService.producto(a,b);
  }

  @Get('division')
  @ApiOperation({ summary: 'Division entre dos numeros' }) 
  @ApiResponse({ 
    status: 200,
    description: 'Division entre dos numeros', 
  })
  division(@Query('a') a:number,@Query('b') b:number):any{
    return this.operacionesService.division(a,b);
  }

  @Get('resta')
  @ApiOperation({ summary: 'Resta entre dos numeros' }) 
  @ApiResponse({ 
    status: 200,
    description: 'Resta entre dos numeros', 
  })
  resta(@Query('a') a:number,@Query('b') b:number):number{
    return this.operacionesService.resta(a,b);
  }
}
