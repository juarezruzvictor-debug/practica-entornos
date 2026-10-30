import { Component } from '@angular/core';

@Component({
  selector: 'app-environment-badge',
  standalone: true,
  template: `<section class="environment"><div class="dot"></div><div><span class="label">VERSIÓN ACTIVA</span><h2>Entorno de pruebas QA</h2><p>QA · Comprobación técnica y detección de errores</p></div></section>`,
  styles: [` .environment{display:flex;align-items:flex-start;gap:18px;border:1px solid #fed7aa;background:#fff7ed;border-radius:16px;padding:24px;margin-top:30px}.dot{width:14px;height:14px;background:#ea580c;box-shadow:0 0 0 6px #ffedd5;border-radius:50%;margin-top:8px;flex:none}.label{font-size:11px;font-weight:800;letter-spacing:.14em;color:#c2410c}h2{color:#9a3412;font-size:26px;margin:8px 0}p{color:#9a3412;margin:0;font-size:15px}`]
})
export class EnvironmentBadgeComponent {}
