// Step renderer + dashboard + welcome views
const { useState: useStateS } = React;

export function StepView({ step, phase, values, onField, onSlider, onCheck, onNext, onPrev, onJump, allValues, onImport }) {
  if (step.kind === 'gate') {
    return <GateView step={step} phase={phase} values={values} allValues={allValues} onPrev={onPrev} onNext={onNext} />;
  }

  const ImportButton = ({ section }) => onImport ? (
    <button className="btn-section-import" onClick={() => onImport(step, section)} title="Use AI to fill this section">
      <span className="btn-section-import-icon">✨</span> Import doc
    </button>
  ) : null;

  return (
    <div>
      <Crumb items={[`Phase ${phase.num} — ${phase.name}`, `Step ${step.num}`]}/>
      <h1 className="step-title">{step.title}</h1>
      {step.lede && <p className="step-lede">{step.lede}</p>}
      <FrameworkTags items={step.tagLines}/>

      {step.fields && step.fields.length > 0 && (
        <div className="section">
          <div className="section-head">
            <div className="section-title">Reflect & record</div>
            <div className="section-meta-row"><ImportButton section="fields"/><span className="section-meta">Saved automatically</span></div>
          </div>
          {step.fields.map(f => (
            <TextField key={f.id} field={f} value={values[f.id]} onChange={onField} statusValue={values[f.id + '_status']}/>
          ))}
        </div>
      )}

      {step.checklist && step.checklist.length > 0 && (
        <div className="section">
          <div className="section-head">
            <div className="section-title">Checklist</div>
            <div className="section-meta-row"><ImportButton section="checklist"/><span className="section-meta">{step.checklist.filter(c => values[c.id]).length} / {step.checklist.length}</span></div>
          </div>
          <Checklist items={step.checklist} values={values} onChange={onCheck} onField={onField}/>
        </div>
      )}

      {step.sliders && step.sliders.length > 0 && (
        <div className="section">
          <div className="section-head">
            <div className="section-title">Self-assessment</div>
            <div className="section-meta-row"><ImportButton section="sliders"/><span className="section-meta">Drag to score 0–10</span></div>
          </div>
          {step.sliders.map(s => (
            <ScoreSlider key={s.id} id={s.id} label={s.label} frame={s.frame} guide={s.guide} value={values[s.id]} onChange={onSlider}/>
          ))}
        </div>
      )}

      <div className="nav-row">
        <button className="btn btn-ghost" onClick={onPrev}>← Previous</button>
        <button className="btn btn-primary" onClick={onNext}>Save & continue →</button>
      </div>
    </div>
  );
}

export function GateView({ step, phase, allValues, onPrev, onNext }) {
  const evalCriterion = (c) => {
    const v = allValues[c.metric];
    if (typeof v === 'boolean') return v ? 'met' : 'unmet';
    if (typeof v === 'number') return v >= 6 ? 'met' : (v >= 4 ? 'partial' : 'unmet');
    return 'unmet';
  };
  const states = step.criteria.map(evalCriterion);
  const metCount = states.filter(s => s === 'met').length;
  const total = states.length;
  const ratio = metCount / total;
  let status, label;
  if (ratio >= 0.8) { status = 'ready'; label = 'Ready to proceed'; }
  else if (ratio >= 0.5) { status = 'warning'; label = 'Soft gate — proceed with care'; }
  else { status = 'not-ready'; label = 'Foundation still forming'; }

  return (
    <div>
      <Crumb items={[`Phase ${phase.num} — ${phase.name}`, `Gate ${step.gateNum === 34 ? '3 & 4' : step.gateNum}`]}/>
      <div className="gate-hero">
        <div className="gate-num">RNF · Gate Checkpoint</div>
        <h1 className="gate-title">{step.title}</h1>
        <div style={{fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic', color: 'var(--ink-2)', marginTop: 8}}>{step.subtitle}</div>
        <div className={`gate-status ${status}`}>● {label}</div>
        <div style={{marginTop: 18, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--ink-3)'}}>{metCount} of {total} criteria met</div>
      </div>

      <div className="card-quote">
        Gates prevent the most common failure mode: rushing into the next phase before the foundation is solid.
        <span className="card-quote-attr">— RNF Gate System</span>
      </div>

      <div className="section">
        <div className="section-head"><div className="section-title">Criteria</div><div className="section-meta">{metCount}/{total}</div></div>
        <ul className="criteria-list">
          {step.criteria.map((c, i) => (
            <li key={c.id} className="criterion">
              <div className={`criterion-icon ${states[i] === 'met' ? 'met' : 'unmet'}`}>{states[i] === 'met' ? '✓' : (states[i] === 'partial' ? '~' : '·')}</div>
              <div className="criterion-text">{c.text}</div>
              <div className="criterion-meta">{states[i].toUpperCase()}</div>
            </li>
          ))}
        </ul>
      </div>

      {status !== 'ready' && (
        <div className="card card-warm">
          <div style={{fontFamily: 'var(--serif)', fontSize: 18, marginBottom: 8}}>⚠ Soft gate</div>
          <div style={{fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.55}}>You can continue, but the unfinished items will compound.</div>
        </div>
      )}

      <div className="nav-row">
        <button className="btn btn-ghost" onClick={onPrev}>← Previous</button>
        <button className={`btn ${status === 'ready' ? 'btn-primary' : 'btn-warm'}`} onClick={onNext}>
          {status === 'ready' ? 'Pass gate & continue →' : 'Continue anyway →'}
        </button>
      </div>
    </div>
  );
}

export function WelcomeView({ onStart, hasProgress, onJumpToDashboard, onImport }) {
  const fws = window.FW_DATA.frameworks;
  return (
    <div>
      <Crumb items={['Wizard', 'Welcome']}/>
      <div className="welcome-hero">
        <div className="eyebrow">Regenerative Neighborhood Framework · v2.0</div>
        <h1 className="welcome-title">From spark to living community.</h1>
        <p className="welcome-lede">A guided wizard through four phases — Spark, Prove, Build, Live — using four interlocking frameworks.</p>
      </div>

      <div className="section">
        <div className="section-head"><div className="section-title">The four frameworks</div><div className="section-meta">All four are always at play</div></div>
        <div className="framework-grid">
          {Object.entries(fws).map(([k, fw]) => (
            <div key={k} className="fw-card">
              <div className="fw-card-bar" style={{background: fw.color}}></div>
              <div style={{paddingLeft: 14}}>
                <div className="fw-card-name">{fw.full}</div>
                <div className="fw-card-tag">{fw.name} · {fw.tag}</div>
                <div className="fw-card-text">{fw.blurb}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-quote">
        Coherence between Intention, Structure, and Practice — and the balance between Individual and Community — are under constant challenge.
        <span className="card-quote-attr">— RCOS / CLIPS</span>
      </div>

      <div className="section">
        <div className="section-head"><div className="section-title">Two ways to move faster</div></div>
        <div className="welcome-helpers">
          <div className="helper-card">
            <div className="helper-icon-wrap"><span className="guide-icon" style={{width: 22, height: 22, fontSize: 13, background: 'var(--accent)', color: '#fff'}}>?</span></div>
            <div className="helper-body">
              <div className="helper-title">Guide buttons explain every question</div>
              <div className="helper-text">Click <span className="inline-pill">? Guide</span> for plain-language explainers on every question.</div>
            </div>
          </div>
          <div className="helper-card helper-card-action">
            <div className="helper-icon-wrap"><span style={{fontSize: 22}}>✨</span></div>
            <div className="helper-body">
              <div className="helper-title">Already have documents? Let AI fill it in.</div>
              <div className="helper-text">Upload a charter, vision deck, or meeting notes and the wizard proposes answers across every section.</div>
              {onImport && <button className="btn btn-primary helper-btn" onClick={onImport}>✨ Upload a document to start</button>}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head"><div className="section-title">What you'll do</div><div className="section-meta">~ 4 sessions · save & resume</div></div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
          <div className="card"><div style={{fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 6}}>1. Reflect</div><div style={{fontSize: 13, color: 'var(--ink-2)'}}>Write your why, your team, your vision. Worksheets at every step.</div></div>
          <div className="card"><div style={{fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 6}}>2. Self-score</div><div style={{fontSize: 13, color: 'var(--ink-2)'}}>Rate your readiness across pillars. Watch your radar fill in real time.</div></div>
          <div className="card"><div style={{fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 6}}>3. Gate-check</div><div style={{fontSize: 13, color: 'var(--ink-2)'}}>At each gate, see if you're ready to proceed. Soft gates warn but don't block.</div></div>
          <div className="card"><div style={{fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 6}}>4. Export</div><div style={{fontSize: 13, color: 'var(--ink-2)'}}>Print or download a full project document for your founding team.</div></div>
        </div>
      </div>

      <div className="nav-row">
        <div className="row gap-8">
          {hasProgress && <button className="btn btn-ghost" onClick={onJumpToDashboard}>View dashboard</button>}
          {onImport && <button className="btn" onClick={onImport}>✨ Import from document</button>}
        </div>
        <button className="btn btn-primary" onClick={onStart}>{hasProgress ? 'Resume →' : 'Begin Phase 1 →'}</button>
      </div>
    </div>
  );
}

export function DashboardView({ values, onJump, onPrint }) {
  const D = window.FW_DATA;
  const pillarScores = computePillarScores(values);
  const overall = Object.values(pillarScores).reduce((a,b) => a+b, 0) / 5;
  const phaseProgress = D.phases.map(p => {
    const totalSteps = p.steps.filter(s => s.kind !== 'gate').length;
    let answered = 0;
    p.steps.forEach(s => {
      if (s.kind === 'gate') return;
      const hasAny = (s.fields||[]).map(f=>f.id).some(id => values[id] && String(values[id]).length > 5);
      const hasSliders = (s.sliders||[]).some(sl => values[sl.id] != null);
      const hasChecks = (s.checklist||[]).some(c => values[c.id]);
      if (hasAny || hasSliders || hasChecks) answered++;
    });
    return { phase: p, ratio: answered / totalSteps, answered, total: totalSteps };
  });
  const currentPhaseIndex = phaseProgress.findIndex(p => p.ratio < 1);
  const currentSpiral = currentPhaseIndex < 0 ? 5 : D.phases[currentPhaseIndex].spiral;
  const completedSpirals = D.phases.slice(0, currentPhaseIndex < 0 ? 4 : currentPhaseIndex).map(p => p.spiral);

  return (
    <div>
      <Crumb items={['Project', 'Dashboard']}/>
      <h1 className="step-title">Your project at a glance</h1>
      <p className="step-lede">A live diagnostic across pillars, phases, and frameworks.</p>

      <div className="metric-grid">
        <div className="metric"><div className="metric-label">Overall readiness</div><div className="metric-value">{overall.toFixed(1)}<span style={{fontSize:14, color:'var(--ink-3)'}}> / 10</span></div><div className="metric-note">across 5 pillars</div></div>
        <div className="metric"><div className="metric-label">Current spiral</div><div className="metric-value">S{currentSpiral}</div><div className="metric-note">{D.phases[Math.max(0, currentPhaseIndex)]?.spiralName || 'Continuous regeneration'}</div></div>
        <div className="metric"><div className="metric-label">Phases active</div><div className="metric-value">{Math.max(1, currentPhaseIndex < 0 ? 4 : currentPhaseIndex + 1)}<span style={{fontSize:14, color:'var(--ink-3)'}}> / 4</span></div><div className="metric-note">spark → live</div></div>
        <div className="metric"><div className="metric-label">Gates passed</div><div className="metric-value">{computeGatesPassed(values)}<span style={{fontSize:14, color:'var(--ink-3)'}}> / 4</span></div><div className="metric-note">RNF checkpoints</div></div>
      </div>

      <div className="dash-grid">
        <div className="card"><div className="rail-title">RNF Pillars</div><PillarRadar scores={pillarScores}/></div>
        <div className="card"><div className="rail-title">5-Spiral Timeline</div><SpiralTimelineLarge currentSpiral={currentSpiral} completedSpirals={completedSpirals} phases={D.phases}/></div>
      </div>

      <div className="section">
        <div className="section-head"><div className="section-title">Phase progress</div><div className="section-meta">Click to jump in</div></div>
        {phaseProgress.map(({phase, ratio, answered, total}) => (
          <div key={phase.id} className="card" style={{cursor:'pointer'}} onClick={() => onJump(phase.steps[0].id)}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8}}>
              <div><span className="mono" style={{color:'var(--ink-3)', marginRight:10, fontSize:11}}>{phase.num}</span><span style={{fontFamily:'var(--serif)', fontSize:22}}>{phase.name}</span><span style={{color:'var(--ink-3)', marginLeft:10, fontSize:13}}>· {phase.subtitle}</span></div>
              <span className="mono" style={{fontSize:11, color:'var(--ink-3)'}}>{answered}/{total} steps</span>
            </div>
            <div style={{height:4, background:'var(--rule-soft)', borderRadius:2}}><div style={{height:'100%', width:`${ratio*100}%`, background:'var(--rnf)', borderRadius:2, transition:'width 300ms'}}></div></div>
          </div>
        ))}
      </div>

      <div className="nav-row">
        <button className="btn btn-ghost" onClick={() => onJump('welcome')}>← Welcome</button>
        <div className="row gap-8">
          <button className="btn" onClick={onPrint}>📄 Export project document</button>
          <button className="btn btn-primary" onClick={() => {
            const next = phaseProgress.find(p => p.ratio < 1);
            onJump(next ? next.phase.steps.find(s => s.kind !== 'gate').id : D.phases[0].steps[0].id);
          }}>Continue where I left off →</button>
        </div>
      </div>
    </div>
  );
}

export function SpiralTimelineLarge({ currentSpiral, completedSpirals, phases }) {
  return (
    <div style={{paddingTop: 14}}>
      {[1,2,3,4,5].map(n => {
        const phase = phases.find(p => p.spiral === n) || phases.find(p => p.id === 'p3' && n === 4);
        const isCurrent = n === currentSpiral;
        const isPassed = completedSpirals.includes(n);
        return (
          <div key={n} style={{display:'grid', gridTemplateColumns:'40px 1fr', gap:14, marginBottom:18}}>
            <div style={{width: 36, height: 36, borderRadius: '50%', background: isCurrent ? 'var(--rnf)' : (isPassed ? 'var(--paper-3)' : 'var(--paper)'), border: '1px solid ' + (isCurrent ? 'var(--rnf)' : 'var(--rule)'), color: isCurrent ? 'var(--paper)' : 'var(--ink-2)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--mono)', fontSize:11, fontWeight:600}}>S{n}</div>
            <div>
              <div style={{fontFamily:'var(--serif)', fontSize:16, lineHeight:1.2}}>{phase ? phase.spiralName : ['Proof of Concept','Feasibility','Capital Formation','Construction & Activation','Continuous Regeneration'][n-1]}</div>
              <div className="mono" style={{fontSize:10, color:'var(--ink-3)', letterSpacing:'0.1em'}}>{isCurrent ? 'IN PROGRESS' : isPassed ? 'PASSED' : 'UPCOMING'}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function computePillarScores(values) {
  const map = {
    ecology: ['site_water','site_climate','eco_assessment','c_water','c_waste','c_energy','metrics'],
    social: ['team_trust','team_diversity','culture_strength','rituals','onboarding','culture_carriers'],
    economy: ['biz_resilience','biz_clarity','fund_realism','fund_alignment','cap_close','revenue_streams'],
    hardware: ['site_access','c_buildings','c_roads','c_connectivity','mp_integration','practice_ready'],
    governance: ['intention_clarity','vision_alignment','structure_explicit','self_clarity','ops_smooth','gov_health','evo_capacity']
  };
  const result = {};
  Object.entries(map).forEach(([pillar, ids]) => {
    let sum = 0, count = 0;
    ids.forEach(id => {
      const v = values[id];
      if (typeof v === 'number') { sum += v; count++; }
      else if (typeof v === 'boolean' && v) { sum += 8; count++; }
    });
    result[pillar] = count > 0 ? sum / count : 0;
  });
  return result;
}

export function computeGatesPassed(values) {
  const D = window.FW_DATA;
  let passed = 0;
  D.phases.forEach(p => {
    p.steps.forEach(s => {
      if (s.kind === 'gate') {
        const met = s.criteria.filter(c => {
          const v = values[c.metric];
          if (typeof v === 'boolean') return v;
          if (typeof v === 'number') return v >= 6;
          return false;
        }).length;
        if (met / s.criteria.length >= 0.8) passed++;
      }
    });
  });
  return passed;
}
