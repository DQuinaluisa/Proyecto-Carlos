import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Tiposangre } from '../modelos/tipo-sangre';
import { Tipodiscapacidad } from '../modelos/tipo-discapacidad';
import { Tipopais } from '../modelos/pais';
import { ListaCatalogos } from '../modelos/lista-catalogos';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { SelectionModel } from '@angular/cdk/collections';
import { Estudiante } from '../modelos/estudiante';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  nombreColumnas: string[];
  listaCatalogos: ListaCatalogos[];
  tiposdeSangre: Tiposangre[];
  tiposdeDiscapacidades: Tipodiscapacidad[];
  paises: Tipopais[];
  estudiantes: Estudiante[];
  verTabla: boolean;
  dataSource;
  tablaSeleccionada: number;
  selection = new SelectionModel<string>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.verTabla = false;
    this.listaCatalogos = [
      {
        descripcion: 'tipo de sangre',
        tabla: 'tiposSnagre'
      },
      {
        descripcion: 'tipo de discapacidad',
        tabla: 'tipoDiscapacidades'
      },
      {
        descripcion: 'pais',
        tabla: 'pais'
      },
      {
        descripcion: 'Estudiantes',
        tabla: 'Estudiantes'
      }
    ];

    this.tiposdeSangre = [
      {
        id: 1,
        descripcion: 'A+',
        fechaRegistro: new Date(),
        idDatoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'A-',
        fechaRegistro: new Date(),
        idDatoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'B+',
        fechaRegistro: new Date(),
        idDatoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'B-',
        fechaRegistro: new Date(),
        idDatoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'AB+',
        fechaRegistro: new Date(),
        idDatoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'AB-',
        fechaRegistro: new Date(),
        idDatoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'O+',
        fechaRegistro: new Date(),
        idDatoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'O-',
        fechaRegistro: new Date(),
        idDatoRegistro: 2,
        idCredencialIngreso: 1
      }
    ];
    this.tiposdeDiscapacidades = [
      {
        id: 1,
        descripcion: 'Intelectual',
        fechaRegistro: new Date(),
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'Física',
        fechaRegistro: new Date(),
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'Visual',
        fechaRegistro: new Date(),
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'Auditiva',
        fechaRegistro: new Date(),
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'Mental',
        fechaRegistro: new Date(),
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'Otra',
        fechaRegistro: new Date(),
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        descripcion: 'No aplica',
        fechaRegistro: new Date(),
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      }
    ];
    this.paises = [
      {
        id: 1,
        codigo: '04H00168',
        descripcion: 'JAIME VALENCIA',
        codigoProvincia: '04',
        codigoCanton: '0402',
        sostenimiento: 'FISCAL',
        estado: 'ACTIVA',
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        codigo: '04H00168',
        descripcion: 'juan',
        codigoProvincia: '04',
        codigoCanton: '0402',
        sostenimiento: 'FISCAL',
        estado: 'ACTIVA',
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        codigo: '04H00170',
        descripcion: 'LUIS FELIPE BORJA',
        codigoProvincia: '04',
        codigoCanton: '0402',
        sostenimiento: 'FISCAL',
        estado: 'ACTIVA',
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        codigo: '04H00171',
        descripcion: 'LOS ANDES',
        codigoProvincia: '04',
        codigoCanton: '0402',
        sostenimiento: 'FISCAL',
        estado: 'ACTIVA',
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        codigo: '04H00148',
        descripcion: 'JUAN PÍO MONTÚFAR',
        codigoProvincia: '04',
        codigoCanton: '0402',
        sostenimiento: 'FISCAL',
        estado: 'ACTIVA',
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
      {
        id: 1,
        codigo: '04H00163',
        descripcion: 'CIUDAD DE TULCÁN',
        codigoProvincia: '04',
        codigoCanton: '0402',
        sostenimiento: 'FISCAL',
        estado: 'ACTIVA',
        idEstadoRegistro: 2,
        idCredencialIngreso: 1
      },
    ];

    this.estudiantes = [
      {
        nombres: 'Jean',
        nombre2: 'Pierre',
        apellido: 'Arias',
        apellido2: 'perez',
        domicilio: 'pintado',
        telefono: [{
          convencional: '216457',
          claro: '0984548535',
          movistar: '0954785115',
          otro: 'otros',
        }],
        dirrecion: [{
          provincia: 'pichincha',
          parroquia: 'Alóag',
          canton: 'mejia',
          calle: 'la 41',
        }]
      },
      {
        nombres: 'jose',
        nombre2: 'andres',
        apellido: 'alvarez',
        apellido2: 'quinto',
        domicilio: 'madgalena',
        telefono: [{
          convencional: '216457',
          claro: '0984548535',
          movistar: '0954785115',
          otro: 'otros',
        }],
        dirrecion: [{
          provincia: 'pichincha',
          parroquia: 'madgalena',
          canton: 'quito',
          calle: 'la 41',
        }]
      }
    ];

  }

  verDatos() {
    this.verTabla = true;
    if (this.tablaSeleccionada == 0) {
      this.nombreColumnas = Object.keys(this.tiposdeSangre[0]);
      this.dataSource = new MatTableDataSource<Tiposangre>(this.tiposdeSangre);
      this.dataSource.paginator = this.paginator
    } else if (this.tablaSeleccionada == 1) {
      this.nombreColumnas = Object.keys(this.tiposdeDiscapacidades[0]);
      this.dataSource = new MatTableDataSource<Tipodiscapacidad>(this.tiposdeDiscapacidades);
      this.dataSource.paginator = this.paginator
    } else if (this.tablaSeleccionada == 2) {
      this.nombreColumnas = Object.keys(this.paises[0]);
      this.dataSource = new MatTableDataSource<Tipopais>(this.paises);
      this.dataSource.paginator = this.paginator
    } else if (this.tablaSeleccionada == 3) {
      this.nombreColumnas = Object.keys(this.estudiantes[0]);
      this.dataSource = new MatTableDataSource<Estudiante>(this.estudiantes);
      this.dataSource.paginator = this.paginator
    } else {
      this.verTabla = false;
    }
  }

  

  removeColumn() {
    if (this.nombreColumnas.length) {
      this.nombreColumnas.pop();
    }
  }

  shuffle() {
    let currentIndex = this.nombreColumnas.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // intercambiar
      let temp = this.nombreColumnas[currentIndex];
      this.nombreColumnas[currentIndex] = this.nombreColumnas[randomIndex];
      this.nombreColumnas[randomIndex] = temp;
    }
  }

  buscar(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  openDialog(registro): void {
    const dialogRef = this.dialog.open(DialogoComponent ,{
      width: '50%',
      data: registro
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

    });
  }
  verpdf()
  // nuevo(registro): void {
  //   const dialogRef = this.dialog.open(ModalComponent ,{
  //     data: registro
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);

  //   });
  // }
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }


  // /** Selects all indexs if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(index => this.selection.select(index));
  // }

  // /** The label for the checkbox on the passed index */
  // checkboxLabel(index?: string[]): string {
  //   if (!index) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(index) ? 'deselect' : 'select'} index ${index + 1}`;
  // }

}




