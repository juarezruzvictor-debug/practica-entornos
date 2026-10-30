import { Component } from '@angular/core';
import { EnvironmentBadgeComponent } from './environment-badge/environment-badge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EnvironmentBadgeComponent],
  template: `<main class="shell"><div class="eyebrow">PRÁCTICA DAW · RELEASE MANAGEMENT</div><h1>Gestión de entornos Angular</h1><p class="intro">¡Bienvenido! Esta aplicación muestra qué versión está publicada en cada etapa del proceso.</p><app-environment-badge></app-environment-badge><footer>Control de calidad · Aceptación · Producción</footer></main>`,
  styles: [` .shell{max-width:800px;margin:9vh auto;padding:48px;background:#fff;border:1px solid #e3e8ee;border-radius:24px;box-shadow:0 16px 50px #1b2e4810}.eyebrow{font-size:12px;letter-spacing:.17em;font-weight:800;color:#637789}h1{font-size:clamp(32px,5vw,48px);letter-spacing:-.045em;margin:18px 0}.intro{font-size:18px;line-height:1.65;color:#546578;max-width:620px}footer{margin-top:40px;font-size:13px;color:#8b99a6}@media(max-width:650px){.shell{margin:20px;padding:28px}}`]
})
export class AppComponent {}
