// Import modal - stub for now (AI scanning requires API key setup)
import React from 'react';

export function ImportModal({ onClose, currentValues, scope, onApply }) {
  return (
    <div className="modal-bg no-print" onClick={onClose}>
      <div className="modal" style={{position:'relative'}} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div style={{padding: '24px 0'}}>
          <div className="eyebrow" style={{marginBottom: 16}}>Import from Document</div>
          <div style={{fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 12}}>✨ AI Import Coming Soon</div>
          <p style={{color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, marginBottom: 20}}>
            The AI-powered document import feature requires an API key to be configured. 
            For now, use the manual entry fields to fill in your answers — they're saved automatically.
          </p>
          <p style={{color: 'var(--ink-3)', fontSize: 13, lineHeight: 1.6, marginBottom: 24}}>
            To enable AI import: connect a Gemini or OpenAI API key in the wizard settings, then upload 
            a charter, vision doc, or meeting notes — and the AI will propose answers across every section.
          </p>
          <button className="btn btn-primary" onClick={onClose}>Got it</button>
        </div>
      </div>
    </div>
  );
}

export function ProjectDocumentView({ values, onClose, onPrint }) {
  const D = window.FW_DATA;
  const pillarScores = { ecology: 0, social: 0, economy: 0, hardware: 0, governance: 0 };
  const overall = 0;
  const today = new Date().toLocaleDateString();
  const projectName = values.project_name || 'Untitled';

  return (
    <div className="modal-bg no-print" onClick={onClose}>
      <div className="modal" style={{position:'relative', maxWidth: 900}} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--rule)'}}>
          <div>
            <div className="eyebrow">Preview & Print</div>
            <div style={{fontFamily:'var(--serif)', fontSize:24}}>Project Document</div>
          </div>
          <button className="btn btn-primary" onClick={onPrint}>🖨 Print / Save PDF</button>
        </div>
        <div style={{fontFamily:'var(--serif)', fontSize: 48, marginBottom: 12}}>{projectName}</div>
        <div style={{color: 'var(--ink-3)', fontSize: 13}}>Generated {today} · Full export available in print view</div>
      </div>
    </div>
  );
}
