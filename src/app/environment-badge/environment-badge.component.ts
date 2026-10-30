import { Component } from '@angular/core';

@Component({
  selector: 'app-environment-badge',
  standalone: true,
  template: `<section class="environment"><div class="dot"></div><div><span class="label">VERSIÓN ACTIVA</span><h2>Entorno de producción</h2><p>PROD · Versión estable para usuarios finales</p></div></section>`,
  styles: [` .environment{display:flex;align-items:flex-start;gap:18px;border:1px solid #b7e4c6;background:#ecfdf3;border-radius:16px;padding:24px;margin-top:30px}.dot{width:14px;height:14px;background:#159447;box-shadow:0 0 0 6px #c8f2d6;border-radius:50%;margin-top:8px;flex:none}.label{font-size:11px;font-weight:800;letter-spacing:.14em;color:#21824b}h2{color:#126b3b;font-size:26px;margin:8px 0}p{color:#377b56;margin:0;font-size:15px}`]
})
export class EnvironmentBadgeComponent {}
