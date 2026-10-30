import { Component } from '@angular/core';

@Component({
  selector: 'app-environment-badge',
  standalone: true,
  template: `<section class="environment"><div class="dot"></div><div><span class="label">VERSIÓN ACTIVA</span><h2>Entorno de aceptación UAT</h2><p>UAT · Validación de requisitos por el usuario o cliente</p></div></section>`,
  styles: [` .environment{display:flex;align-items:flex-start;gap:18px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:16px;padding:24px;margin-top:30px}.dot{width:14px;height:14px;background:#2563eb;box-shadow:0 0 0 6px #dbeafe;border-radius:50%;margin-top:8px;flex:none}.label{font-size:11px;font-weight:800;letter-spacing:.14em;color:#1d4ed8}h2{color:#1e40af;font-size:26px;margin:8px 0}p{color:#1e40af;margin:0;font-size:15px}`]
})
export class EnvironmentBadgeComponent {}
