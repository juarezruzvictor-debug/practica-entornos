import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
// El componente resultante es local y está excluido de Git.
const { environment } = JSON.parse(readFileSync(new URL('../environment-code.json', import.meta.url), 'utf8'));
const environments = {
 PROD: {title:'Entorno de producción', description:'PROD · Versión estable para usuarios finales', border:'#b7e4c6',background:'#ecfdf3',dot:'#159447',halo:'#c8f2d6',label:'#21824b',heading:'#126b3b',text:'#377b56'},
 QA: {title:'Entorno de pruebas QA', description:'QA · Comprobación técnica y detección de errores', border:'#fed7aa',background:'#fff7ed',dot:'#ea580c',halo:'#ffedd5',label:'#c2410c',heading:'#9a3412',text:'#9a3412'},
 UAT: {title:'Entorno de aceptación UAT', description:'UAT · Validación de requisitos por el usuario o cliente', border:'#bfdbfe',background:'#eff6ff',dot:'#2563eb',halo:'#dbeafe',label:'#1d4ed8',heading:'#1e40af',text:'#1e40af'}
};
const env = environments[environment];
if (!env) throw new Error('Entorno no válido: ' + environment);
const output = new URL('../src/app/environment-badge/', import.meta.url);
mkdirSync(output, { recursive: true });
writeFileSync(new URL('environment-badge.component.ts', output), `import { Component } from '@angular/core';

@Component({
  selector: 'app-environment-badge',
  standalone: true,
  template: \`<section class="environment"><div class="dot"></div><div><span class="label">VERSIÓN ACTIVA</span><h2>${env.title}</h2><p>${env.description}</p></div></section>\`,
  styles: [\` .environment{display:flex;align-items:flex-start;gap:18px;border:1px solid ${env.border};background:${env.background};border-radius:16px;padding:24px;margin-top:30px}.dot{width:14px;height:14px;background:${env.dot};box-shadow:0 0 0 6px ${env.halo};border-radius:50%;margin-top:8px;flex:none}.label{font-size:11px;font-weight:800;letter-spacing:.14em;color:${env.label}}h2{color:${env.heading};font-size:26px;margin:8px 0}p{color:${env.text};margin:0;font-size:15px}\`]
})
export class EnvironmentBadgeComponent {}
`, 'utf8');
console.log('Componente local generado para ' + environment);
