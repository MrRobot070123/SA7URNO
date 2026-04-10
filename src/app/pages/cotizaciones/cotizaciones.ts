import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cotizaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cotizaciones.html',
  styleUrl: './cotizaciones.css',
})

export class CotizacionesComponent {
  step = 1;

  // Datos fijos
  companyName = 'Compañía Hotelera Plaza S.A.S';
  nit = '900.842.287-4';

  // Fechas
  fechaElaboracion!: string;
  fechaEvento!: string;
  validoHasta!: string;

  ngOnInit(): void {
    const today = new Date();

    this.fechaElaboracion = this.formatDate(today);
    this.validoHasta = this.formatDate(this.addDays(today, 7));
  }

  private addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  // --- Ejecutivo (mock login) ---
  ejecutivo = {
    nombre: 'Daniel Pacheco',
    codigo: '009',
    telefono: '3001234567'
  };

  // --- Clientes mock (simulación BD) ---
  clientes = [
    { nombre: 'Carlos Ruiz', cedula: '1042520045'},
    { nombre: 'Laura Martínez', cedula: '72055505'},
    { nombre: 'Andrés Gómez', cedula: '1140475050'},
    { nombre: 'Paula Herrera', cedula: '1140520587'},
    { nombre: 'Jorge Castillo', cedula: '72055279'}
  ];

  // --- Cliente seleccionado ---
  clienteSeleccionado: any = null;
  busquedaCliente = '';
  clientesFiltrados = [...this.clientes];

  // --- Filtrar clientes por nombre ---
  filtrarClientes() {
    this.clientesFiltrados = this.clientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(this.busquedaCliente.toLowerCase())
    );
  }

  // --- Seleccionar cliente ---
  seleccionarCliente(cliente: any) {
    this.clienteSeleccionado = cliente;
    this.busquedaCliente = cliente.nombre;
    this.clientesFiltrados = [];
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
