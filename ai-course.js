// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════
const COURSE = [
  {
    id: 'b1',
    num: 'BLOQUE I',
    title: 'Fundamentos Matemáticos y Programáticos',
    sub: '"El suelo sobre el que se construye todo"',
    accentColor: '#00ff88',
    chapters: [
      {
        id: 'c1',
        num: 'CAP 1',
        title: 'Matemáticas para Machine Learning',
        topics: [
          'Álgebra lineal: vectores, matrices, valores propios',
          'Cálculo: derivadas, regla de la cadena, gradientes',
          'Probabilidad: distribuciones, Bayes, esperanza, varianza'
        ],
        resources: [
          { label: '3B1B — Essence of Linear Algebra', type: 'video', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' },
          { label: '3B1B — Essence of Calculus', type: 'video', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr' },
          { label: 'StatQuest — Statistics Fundamentals', type: 'video', url: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9' },
          { label: 'Mathematics for Machine Learning (PDF libre)', type: 'book', url: 'https://mml-book.github.io/' },
          { label: 'ML-Foundations — Jon Krohn (GitHub)', type: 'code', url: 'https://github.com/jonkrohn/ML-foundations' }
        ]
      },
      {
        id: 'c2',
        num: 'CAP 2',
        title: 'Python Científico para IA',
        topics: [
          'Python avanzado: clases, iteradores, decoradores',
          'NumPy: broadcasting, indexing, operaciones tensoriales',
          'Pandas, Matplotlib, Jupyter/Colab'
        ],
        resources: [
          { label: 'Advanced Python Mastery — Beazley (GitHub)', type: 'code', url: 'https://github.com/dabeaz-course/python-mastery' },
          { label: 'NumPy Quickstart (oficial)', type: 'doc', url: 'https://numpy.org/doc/stable/user/quickstart.html' },
          { label: 'Fluent Python — Ramalho', type: 'book', url: 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/' },
          { label: 'Tensor Puzzles — srush (GitHub)', type: 'code', url: 'https://github.com/srush/Tensor-Puzzles' },
          { label: 'Google Colab (entorno GPU gratuito)', type: 'doc', url: 'https://colab.research.google.com/' }
        ]
      }
    ],
    exam: {
      id: 'e1',
      title: 'EXAMEN 1',
      topics: [
        'Operaciones matriciales y su significado geométrico',
        'Cálculo de gradientes manualmente (regla de la cadena)',
        'Estadística descriptiva e inferencial básica',
        'Manipulación de arrays con NumPy sin loops explícitos',
        'Broadcasting y reshaping de tensores'
      ]
    }
  },
  {
    id: 'b2',
    num: 'BLOQUE II',
    title: 'Machine Learning Clásico',
    sub: '"Los algoritmos que preceden a las redes neuronales"',
    accentColor: '#00b4ff',
    chapters: [
      {
        id: 'c3',
        num: 'CAP 3',
        title: 'Fundamentos de Machine Learning',
        topics: [
          'Aprendizaje supervisado vs no supervisado vs RL',
          'Regresión lineal y logística desde cero',
          'Gradient Descent, SGD, optimización',
          'Overfitting, underfitting, regularización L1/L2',
          'Validación cruzada, árboles, Random Forests, SVM'
        ],
        resources: [
          { label: 'Stanford CS229 — Andrew Ng (YouTube)', type: 'video', url: 'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfKKDY' },
          { label: 'CS229 Lecture Notes (PDF oficial)', type: 'doc', url: 'https://cs229.stanford.edu/main_notes.pdf' },
          { label: 'The Hundred-Page ML Book — Burkov', type: 'book', url: 'http://themlbook.com/' },
          { label: 'ML From Scratch — eriklindernoren', type: 'code', url: 'https://github.com/eriklindernoren/ML-From-Scratch' },
          { label: 'Google ML Crash Course', type: 'course', url: 'https://developers.google.com/machine-learning/crash-course' }
        ]
      },
      {
        id: 'c4',
        num: 'CAP 4',
        title: 'PyTorch: El Framework',
        topics: [
          'Tensores en PyTorch vs NumPy',
          'Autograd: diferenciación automática',
          'nn.Module, bucle de entrenamiento',
          'GPU acceleration (CUDA)',
          'Guardar y cargar modelos'
        ],
        resources: [
          { label: 'PyTorch Tutorials oficiales', type: 'doc', url: 'https://pytorch.org/tutorials/' },
          { label: 'Aladdin Persson — PyTorch Tutorials (YouTube)', type: 'video', url: 'https://www.youtube.com/playlist?list=PLhhyoLH6IjfxeoooqP9rhU3HJIAVAJ3Vz' },
          { label: 'MiniTorch — DIY ML Engineering', type: 'course', url: 'https://minitorch.github.io/' }
        ]
      }
    ],
    exam: {
      id: 'e2',
      title: 'EXAMEN 2',
      topics: [
        'Implementación desde cero de regresión lineal con gradient descent',
        'Diferencias entre paradigmas de aprendizaje',
        'Diagnóstico de underfitting/overfitting y soluciones',
        'Funcionamiento interno del autograd de PyTorch',
        'Construcción y entrenamiento de modelo simple con nn.Module'
      ]
    }
  },
  {
    id: 'b3',
    num: 'BLOQUE III',
    title: 'Deep Learning',
    sub: '"De perceptrón a arquitecturas modernas"',
    accentColor: '#ff6b35',
    chapters: [
      {
        id: 'c5',
        num: 'CAP 5',
        title: 'Redes Neuronales desde Cero',
        topics: [
          'Perceptrón y MLP',
          'Funciones de activación: ReLU, sigmoid, softmax',
          'Backpropagation: derivación manual y computacional',
          'Batch Normalization, Dropout, inicialización de pesos',
          'Gradiente desvaneciente/explosivo'
        ],
        resources: [
          { label: 'Neural Networks: Zero to Hero — Karpathy', type: 'video', url: 'https://karpathy.ai/zero-to-hero.html' },
          { label: 'nn-zero-to-hero GitHub (notebooks)', type: 'code', url: 'https://github.com/karpathy/nn-zero-to-hero' },
          { label: 'Dive into Deep Learning d2l.ai (Cap 1–6)', type: 'book', url: 'https://d2l.ai/' }
        ]
      },
      {
        id: 'c6',
        num: 'CAP 6',
        title: 'Arquitecturas Especializadas',
        topics: [
          'CNNs: convolución, pooling, LeNet, ResNet',
          'RNNs: vanishing gradients, LSTM, GRU',
          'Sequence-to-sequence models',
          'Embeddings: Word2Vec, representaciones densas'
        ],
        resources: [
          { label: 'Deep Learning Specialization — Andrew Ng (Coursera)', type: 'course', url: 'https://www.coursera.org/specializations/deep-learning' },
          { label: 'Practical Deep Learning for Coders — fast.ai', type: 'course', url: 'https://course.fast.ai/' },
          { label: 'Dive into Deep Learning — Cap 7–10 (CNNs, RNNs)', type: 'book', url: 'https://d2l.ai/chapter_convolutional-neural-networks/index.html' }
        ]
      }
    ],
    exam: {
      id: 'e3',
      title: 'EXAMEN 3',
      topics: [
        'Backpropagation manual en red de 2 capas',
        'Construcción de un autograd engine simple tipo micrograd',
        'Diferencias entre CNN, RNN, LSTM y cuándo usar cada uno',
        'Diagnóstico de problemas de entrenamiento',
        'Clasificador de imágenes con CNN en PyTorch'
      ]
    }
  },
  {
    id: 'b4',
    num: 'BLOQUE IV',
    title: 'Transformers y LLMs',
    sub: '"La arquitectura que lo cambió todo"',
    accentColor: '#a855f7',
    chapters: [
      {
        id: 'c7',
        num: 'CAP 7',
        title: 'La Arquitectura Transformer',
        topics: [
          'Attention mechanism: scaled dot-product',
          'Multi-head attention',
          'Positional encoding',
          'Encoder vs Decoder vs Encoder-Decoder',
          'Tokenización y Byte Pair Encoding (BPE)'
        ],
        resources: [
          { label: 'Attention Is All You Need (arXiv paper)', type: 'paper', url: 'https://arxiv.org/abs/1706.03762' },
          { label: 'The Illustrated Transformer — Jay Alammar', type: 'doc', url: 'https://jalammar.github.io/illustrated-transformer/' },
          { label: "Let's build GPT from scratch — Karpathy", type: 'video', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' },
          { label: 'Dive into Deep Learning — Cap 11 (Attention)', type: 'book', url: 'https://d2l.ai/chapter_attention-mechanisms-and-transformers/index.html' }
        ]
      },
      {
        id: 'c8',
        num: 'CAP 8',
        title: 'LLMs: Pre-entrenamiento, Fine-tuning y RLHF',
        topics: [
          'Pre-entrenamiento: next token prediction, masked LM',
          'Transfer Learning y Fine-Tuning',
          'LoRA, QLoRA, adapters (PEFT)',
          'RLHF: Reinforcement Learning from Human Feedback',
          'Cuantización: int4/int8, modelos locales (Ollama)'
        ],
        resources: [
          { label: 'Hugging Face LLM Course (gratuito)', type: 'course', url: 'https://huggingface.co/learn/llm-course' },
          { label: 'Build a LLM from Scratch — Sebastian Raschka', type: 'book', url: 'https://www.manning.com/books/build-a-large-language-model-from-scratch' },
          { label: 'Understanding LLMs — Raschka (artículo)', type: 'doc', url: 'https://magazine.sebastianraschka.com/p/understanding-large-language-models' },
          { label: 'Fine-tuning LLMs — HuggingFace Chapter 11', type: 'course', url: 'https://huggingface.co/learn/llm-course/en/chapter11/1' }
        ]
      }
    ],
    exam: {
      id: 'e4',
      title: 'EXAMEN 4',
      topics: [
        'Funcionamiento interno del mecanismo de atención (con fórmulas)',
        'Diferencias entre modelos encoder-only, decoder-only, encoder-decoder',
        'Proceso de tokenización BPE',
        'Full fine-tuning vs LoRA: cuándo usar cada uno',
        'Implementación de Transformer básico en PyTorch desde cero'
      ]
    }
  },
  {
    id: 'b5',
    num: 'BLOQUE V',
    title: 'Aplicación Práctica y Producción',
    sub: '"Del modelo al sistema"',
    accentColor: '#ffd700',
    chapters: [
      {
        id: 'c9',
        num: 'CAP 9',
        title: 'Modelos en Producción y MLOps',
        topics: [
          'Servicio de modelos (FastAPI + PyTorch, ONNX)',
          'Evaluación y benchmarking',
          'Monitoreo: data drift, model drift',
          'Versionado de experimentos (MLflow, W&B)',
          'Cómputo y costo (GPU cloud, quantization)'
        ],
        resources: [
          { label: 'Designing Machine Learning Systems — Chip Huyen', type: 'book', url: 'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/' },
          { label: 'Weights & Biases Docs', type: 'doc', url: 'https://docs.wandb.ai/' },
          { label: 'MLflow Documentación', type: 'doc', url: 'https://mlflow.org/docs/latest/index.html' },
          { label: 'Full Stack Deep Learning — LLMOps (Berkeley)', type: 'course', url: 'https://fullstackdeeplearning.com/llm-bootcamp/' }
        ]
      },
      {
        id: 'c10',
        num: 'CAP 10',
        title: 'Agentes de IA y Sistemas Multi-Agente',
        topics: [
          'Arquitectura de agente: percepción, razonamiento, acción',
          'Tool use / Function calling',
          'RAG (Retrieval Augmented Generation)',
          'Orquestación: LangGraph, AutoGen',
          'Sistemas multi-agente: coordinación y memoria'
        ],
        resources: [
          { label: 'Hugging Face — Agents Course (gratuito)', type: 'course', url: 'https://huggingface.co/learn/agents-course' },
          { label: 'LangGraph Documentación oficial', type: 'doc', url: 'https://langchain-ai.github.io/langgraph/' },
          { label: 'RAG from scratch — LangChain YouTube', type: 'video', url: 'https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x' }
        ]
      }
    ],
    exam: {
      id: 'ef',
      title: 'EXAMEN FINAL',
      topics: [
        'Diseño completo de pipeline ML/IA: datos hasta producción',
        'Evaluación y selección de arquitecturas para distintos problemas',
        'Implementación de agente con tool use y memoria',
        'Fine-tuning de LLM open-source con LoRA',
        'Trade-offs de costo/rendimiento en sistemas de IA reales'
      ]
    }
  }
];

const ACHIEVEMENTS = [
  { id: 'ach_first', icon: '🚀', name: 'Primer Paso', desc: 'Completaste tu primer capítulo', trigger: (s) => s.completedChapters >= 1 },
  { id: 'ach_math', icon: '∑', name: 'Matemático', desc: 'Completaste los fundamentos matemáticos', trigger: (s) => s.completedChapters >= 2 },
  { id: 'ach_ml', icon: '📐', name: 'ML Clásico', desc: 'Completaste el bloque de ML clásico', trigger: (s) => s.completedChapters >= 4 },
  { id: 'ach_exam1', icon: '📋', name: 'Primera prueba', desc: 'Aprobaste el primer examen', trigger: (s) => s.passedExams.includes('e1') },
  { id: 'ach_halfway', icon: '⚡', name: 'A mitad de camino', desc: '5 capítulos completados', trigger: (s) => s.completedChapters >= 5 },
  { id: 'ach_dl', icon: '🧠', name: 'Deep Learner', desc: 'Completaste el bloque de Deep Learning', trigger: (s) => s.completedChapters >= 6 },
  { id: 'ach_transformer', icon: '🤖', name: 'Transformer Master', desc: 'Dominaste la arquitectura Transformer', trigger: (s) => isChapterDone('c7') && isChapterDone('c8') },
  { id: 'ach_exam3', icon: '🏆', name: 'Tri-Examinado', desc: 'Aprobaste 3 exámenes', trigger: (s) => s.passedExams.length >= 3 },
  { id: 'ach_allchapters', icon: '📚', name: 'Completista', desc: 'Todos los capítulos completados', trigger: (s) => s.completedChapters >= 10 },
  { id: 'ach_graduate', icon: '🎓', name: 'AI Developer', desc: 'Completaste el programa entero', trigger: (s) => s.passedExams.length >= 5 && s.completedChapters >= 10 },
  { id: 'ach_speed', icon: '💨', name: 'Fast Learner', desc: 'Completaste 3 capítulos seguidos', trigger: (s) => s.streak >= 3 },
  { id: 'ach_xp500', icon: '✨', name: '500 XP', desc: 'Acumulaste 500 puntos de experiencia', trigger: (s) => s.xp >= 500 }
];

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
function loadState() {
  try {
    const saved = localStorage.getItem('ai_course_state');
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return {
    completedChapters: 0,
    completedChapterIds: [],
    passedExams: [],
    unlockedAchievements: [],
    xp: 0,
    streak: 0
  };
}

function saveState() {
  localStorage.setItem('ai_course_state', JSON.stringify(state));
}

let state = loadState();

function isChapterDone(id) {
  return state.completedChapterIds.includes(id);
}

function isExamPassed(id) {
  return state.passedExams.includes(id);
}

// ══════════════════════════════════════════
// THREE.JS BACKGROUND
// ══════════════════════════════════════════
(function initThree() {
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5;

  // Particle field — neural network aesthetic
  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

    const t = Math.random();
    if (t < 0.5) {
      colors[i * 3] = 0; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 0.53; // green
    } else if (t < 0.8) {
      colors[i * 3] = 0; colors[i * 3 + 1] = 0.7; colors[i * 3 + 2] = 1;  // blue
    } else {
      colors[i * 3] = 1; colors[i * 3 + 1] = 0.42; colors[i * 3 + 2] = 0.2; // orange
    }
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const pMat = new THREE.PointsMaterial({
    size: 0.04,
    vertexColors: true,
    transparent: true,
    opacity: 0.6
  });

  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  // Connection lines (sparse)
  const lineGeo = new THREE.BufferGeometry();
  const linePositions = [];
  const lineColors = [];
  const sampleCount = 80;
  for (let i = 0; i < sampleCount; i++) {
    const a = Math.floor(Math.random() * particleCount);
    const b = Math.floor(Math.random() * particleCount);
    linePositions.push(
      positions[a*3], positions[a*3+1], positions[a*3+2],
      positions[b*3], positions[b*3+1], positions[b*3+2]
    );
    lineColors.push(0, 1, 0.53, 0, 0.7, 1);
  }
  lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
  lineGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(lineColors), 3));
  const lineMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.06 });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function animate(t) {
    requestAnimationFrame(animate);
    const time = t * 0.001;
    particles.rotation.y = time * 0.03 + mouseX * 0.1;
    particles.rotation.x = time * 0.01 + mouseY * 0.05;
    lines.rotation.y = particles.rotation.y;
    lines.rotation.x = particles.rotation.x;
    renderer.render(scene, camera);
  }
  animate(0);
})();

// ══════════════════════════════════════════
// RENDER UI
// ══════════════════════════════════════════
function rtClass(type) {
  return `rt-${type}`;
}

function rtLabel(type) {
  const map = { video: '▶ VIDEO', book: '📖 LIBRO', course: '🎓 CURSO', paper: '📄 PAPER', doc: '📋 DOC', code: '💻 CÓDIGO' };
  return map[type] || type.toUpperCase();
}

function renderBlocks() {
  const container = document.getElementById('blocks-container');
  container.innerHTML = '';

  COURSE.forEach((block) => {
    const doneInBlock = block.chapters.filter(ch => isChapterDone(ch.id)).length;
    const totalInBlock = block.chapters.length;
    const examDone = isExamPassed(block.exam.id);

    const card = document.createElement('div');
    card.className = 'block-card';
    card.id = `block-${block.id}`;

    const chHTML = block.chapters.map(ch => {
      const done = isChapterDone(ch.id);
      return `
        <div class="chapter-card ${done ? 'completed' : ''}" data-action="open-chapter" data-ch-id="${ch.id}">
          <div class="ch-header">
            <span class="ch-num">${ch.num}</span>
            <div class="ch-check">${done ? '✓' : ''}</div>
          </div>
          <div class="ch-title">${ch.title}</div>
          <ul class="ch-topics">
            ${ch.topics.slice(0,3).map(t => `<li>${t}</li>`).join('')}
          </ul>
          <div class="resources-list" style="margin-top:0.75rem">
            ${ch.resources.map(r => `
              <a class="resource-item" href="${r.url}" target="_blank" rel="noopener">
                <span class="resource-type ${rtClass(r.type)}">${rtLabel(r.type)}</span>
                <span>${r.label}</span>
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    const examTopics = block.exam.topics.map(t => `<li>${t}</li>`).join('');

    card.innerHTML = `
      <div class="block-header" data-action="toggle-block" data-block-id="${block.id}">
        <div class="block-left">
          <span class="block-num" style="color:${block.accentColor};background:${block.accentColor}20">${block.num}</span>
          <div>
            <div class="block-title">${block.title}</div>
            <div class="block-sub">${block.sub}</div>
          </div>
        </div>
        <div class="block-right">
          <span class="block-progress-mini">${doneInBlock}/${totalInBlock} caps</span>
          <span class="chevron">▼</span>
        </div>
      </div>
      <div class="block-body">
        <div class="chapters-grid">${chHTML}</div>
        <div class="exam-card ${examDone ? 'passed' : ''}">
          <div class="exam-icon">${examDone ? '✅' : '📋'}</div>
          <div>
            <div class="exam-title">${block.exam.title} ${examDone ? '— APROBADO' : ''}</div>
            <div class="exam-topics">Temas evaluados:<br><ul style="margin-top:0.4rem">${examTopics}</ul></div>
            <button class="exam-btn" data-action="toggle-exam" data-exam-id="${block.exam.id}">
              ${examDone ? 'Marcar como pendiente' : 'Marcar como aprobado'}
            </button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function toggleBlock(id) {
  const card = document.getElementById(`block-${id}`);
  card.classList.toggle('open');
}

function toggleExam(examId) {
  if (isExamPassed(examId)) {
    state.passedExams = state.passedExams.filter(e => e !== examId);
    state.xp = Math.max(0, state.xp - 100);
  } else {
    state.passedExams.push(examId);
    state.xp += 100;
    showToast('🏆', '¡Examen aprobado!', '+100 XP', '#ffd700');
  }
  saveState();
  renderBlocks();
  updateProgress();
  checkAchievements();
}

function openChapterModal(chId) {
  // chapters are flat lookup
  let ch = null;
  COURSE.forEach(b => b.chapters.forEach(c => { if (c.id === chId) ch = c; }));
  if (!ch) return;

  const done = isChapterDone(chId);

  document.getElementById('modal-content').innerHTML = `
    <span class="modal-label">${ch.num}</span>
    <div class="modal-title">${ch.title}</div>
    <div style="font-family:var(--font-mono);font-size:0.65rem;color:var(--muted);margin-bottom:1.5rem;letter-spacing:0.05em">
      ${done ? '✅ COMPLETADO' : '⏳ PENDIENTE'}
    </div>
    <div style="margin-bottom:1rem;font-family:var(--font-mono);font-size:0.7rem;color:var(--accent);letter-spacing:0.1em">TEMAS</div>
    <ul class="modal-topics">
      ${ch.topics.map(t => `<li>${t}</li>`).join('')}
    </ul>
    <div style="margin-top:1.25rem;margin-bottom:0.75rem;font-family:var(--font-mono);font-size:0.7rem;color:var(--accent2);letter-spacing:0.1em">RECURSOS</div>
    <div class="resources-list">
      ${ch.resources.map(r => `
        <a class="resource-item" href="${r.url}" target="_blank" rel="noopener">
          <span class="resource-type ${rtClass(r.type)}">${rtLabel(r.type)}</span>
          <span>${r.label}</span>
        </a>
      `).join('')}
    </div>
    <div class="modal-actions">
      <button class="btn-primary" data-action="toggle-chapter" data-ch-id="${chId}">
        ${done ? 'Marcar como pendiente' : '✓ Marcar como completado'}
      </button>
      <button class="btn-secondary" data-action="close-modal">Cerrar</button>
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
}

function toggleChapter(chId) {
  if (isChapterDone(chId)) {
    state.completedChapterIds = state.completedChapterIds.filter(c => c !== chId);
    state.completedChapters = state.completedChapterIds.length;
    state.xp = Math.max(0, state.xp - 50);
  } else {
    state.completedChapterIds.push(chId);
    state.completedChapters = state.completedChapterIds.length;
    state.streak++;
    state.xp += 50;
    showToast('📚', '¡Capítulo completado!', '+50 XP', '#00ff88');
  }
  saveState();
  closeModal();
  renderBlocks();
  updateProgress();
  checkAchievements();
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

function setupEventHandlers() {
  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const { action } = target.dataset;

    if (action === 'export-state') {
      StateManager.export();
      return;
    }

    if (action === 'toggle-import-zone') {
      StateManager.toggleImportZone();
      return;
    }

    if (action === 'confirm-reset') {
      StateManager.confirmReset();
      return;
    }

    if (action === 'execute-reset') {
      StateManager.executeReset();
      return;
    }

    if (action === 'close-confirm') {
      document.getElementById('confirm-overlay').classList.remove('open');
      return;
    }

    if (action === 'open-import-file') {
      document.getElementById('sm-file-input').click();
      return;
    }

    if (action === 'close-modal') {
      closeModal();
      return;
    }

    if (action === 'toggle-block' && target.dataset.blockId) {
      toggleBlock(target.dataset.blockId);
      return;
    }

    if (action === 'toggle-exam' && target.dataset.examId) {
      toggleExam(target.dataset.examId);
      return;
    }

    if (action === 'open-chapter' && target.dataset.chId) {
      openChapterModal(target.dataset.chId);
      return;
    }

    if (action === 'toggle-chapter' && target.dataset.chId) {
      toggleChapter(target.dataset.chId);
    }
  });

  const dropZone = document.getElementById('sm-drop-zone');
  const fileInput = document.getElementById('sm-file-input');

  if (dropZone) {
    dropZone.addEventListener('dragover', StateManager.onDragOver);
    dropZone.addEventListener('dragleave', StateManager.onDragLeave);
    dropZone.addEventListener('drop', StateManager.onDrop);
  }

  if (fileInput) {
    fileInput.addEventListener('change', StateManager.onFileSelect);
  }
}

// ══════════════════════════════════════════
// PROGRESS
// ══════════════════════════════════════════
function updateProgress() {
  const totalChapters = 10;
  const pct = Math.round((state.completedChapters / totalChapters) * 100);
  document.getElementById('total-bar').style.width = pct + '%';
  document.getElementById('pct-text').textContent = pct + '%';

  const maxXP = 800;
  const xpPct = Math.min(100, Math.round((state.xp / maxXP) * 100));
  document.getElementById('nav-xp-text').textContent = state.xp + ' XP';
  document.getElementById('nav-xp-bar').style.width = xpPct + '%';

  // Sync manager stats if component is ready
  if (typeof StateManager !== 'undefined') StateManager.updateStats();
}

// ══════════════════════════════════════════
// ACHIEVEMENTS
// ══════════════════════════════════════════
function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  grid.innerHTML = '';
  ACHIEVEMENTS.forEach(ach => {
    const unlocked = state.unlockedAchievements.includes(ach.id);
    const el = document.createElement('div');
    el.className = `achievement ${unlocked ? 'unlocked' : ''}`;
    el.innerHTML = `
      <div class="achievement-badge"></div>
      <span class="achievement-icon">${ach.icon}</span>
      <div class="achievement-name">${ach.name}</div>
      <div class="achievement-desc">${ach.desc}</div>
    `;
    grid.appendChild(el);
  });
}

function checkAchievements() {
  let newlyUnlocked = false;
  ACHIEVEMENTS.forEach(ach => {
    if (!state.unlockedAchievements.includes(ach.id)) {
      try {
        if (ach.trigger(state)) {
          state.unlockedAchievements.push(ach.id);
          newlyUnlocked = true;
          setTimeout(() => {
            showToast(ach.icon, '¡Logro desbloqueado!', ach.name, '#ffd700');
          }, 500);
        }
      } catch(e) {}
    }
  });
  if (newlyUnlocked) {
    saveState();
    renderAchievements();
  }
}

// ══════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════
function showToast(icon, title, sub, color = '#00ff88') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.borderColor = color;
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-text">
      <span class="toast-title" style="color:${color}">${title}</span>
      <span class="toast-sub">${sub}</span>
    </div>
  `;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// ══════════════════════════════════════════
// STATE MANAGER COMPONENT
// Encargado de: leer JSON externo, validarlo,
// aplicarlo al estado global y redibujar la UI
// ══════════════════════════════════════════
const StateManager = (() => {

  // ── Schema de validación ──
  const VALID_CHAPTER_IDS = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10'];
  const VALID_EXAM_IDS    = ['e1','e2','e3','e4','ef'];
  const VALID_ACH_IDS     = ACHIEVEMENTS.map(a => a.id);

  function validate(raw) {
    if (typeof raw !== 'object' || raw === null) throw new Error('El archivo no contiene un objeto JSON válido.');

    const errors = [];

    if (!Array.isArray(raw.completedChapterIds))
      errors.push('completedChapterIds debe ser un array.');
    else {
      const invalid = raw.completedChapterIds.filter(id => !VALID_CHAPTER_IDS.includes(id));
      if (invalid.length) errors.push(`IDs de capítulo desconocidos: ${invalid.join(', ')}`);
    }

    if (!Array.isArray(raw.passedExams))
      errors.push('passedExams debe ser un array.');
    else {
      const invalid = raw.passedExams.filter(id => !VALID_EXAM_IDS.includes(id));
      if (invalid.length) errors.push(`IDs de examen desconocidos: ${invalid.join(', ')}`);
    }

    if (!Array.isArray(raw.unlockedAchievements))
      errors.push('unlockedAchievements debe ser un array.');

    if (typeof raw.xp !== 'number' || raw.xp < 0)
      errors.push('xp debe ser un número positivo.');

    if (errors.length) throw new Error(errors.join('\n'));

    return true;
  }

  // ── Aplicar estado importado a la app ──
  function applyState(imported) {
    // Merge: respetamos sólo campos conocidos, descartamos basura
    state.completedChapterIds  = imported.completedChapterIds.filter(id => VALID_CHAPTER_IDS.includes(id));
    state.completedChapters    = state.completedChapterIds.length;
    state.passedExams          = imported.passedExams.filter(id => VALID_EXAM_IDS.includes(id));
    state.unlockedAchievements = (imported.unlockedAchievements || []).filter(id => VALID_ACH_IDS.includes(id));
    state.xp                   = typeof imported.xp === 'number' ? imported.xp : 0;
    state.streak               = typeof imported.streak === 'number' ? imported.streak : 0;

    saveState();

    // Redibujar toda la UI
    renderBlocks();
    updateProgress();
    renderAchievements();
    updateManagerStats();

    showToast('✅', '¡Progreso importado!', `${state.completedChapters} caps · ${state.passedExams.length} exámenes · ${state.xp} XP`, '#00ff88');
  }

  // ── Parsear y procesar un string JSON ──
  function processJSON(text) {
    let raw;
    try {
      raw = JSON.parse(text);
    } catch(e) {
      showToast('❌', 'JSON inválido', 'El archivo no se pudo parsear.', '#ff4757');
      return;
    }

    try {
      validate(raw);
      applyState(raw);
      toggleImportZone(false);
    } catch(e) {
      showToast('❌', 'Datos inválidos', e.message.split('\n')[0], '#ff4757');
    }
  }

  // ── EXPORT ──
  function exportState() {
    const payload = {
      ...state,
      _version: 1,
      _exportedAt: new Date().toISOString(),
      _app: 'ai-developer-path'
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    const date = new Date().toISOString().slice(0,10);
    a.download = `ai-course-progress-${date}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('💾', '¡Progreso exportado!', a.download, '#00b4ff');
  }

  // ── IMPORT zone toggle ──
  function toggleImportZone(force) {
    const zone = document.getElementById('sm-drop-zone');
    const isVisible = zone.classList.contains('visible');
    const show = force !== undefined ? force : !isVisible;
    zone.classList.toggle('visible', show);
  }

  // ── Drag & Drop handlers ──
  function onDragOver(e) {
    e.preventDefault();
    document.getElementById('sm-drop-zone').classList.add('drag-over');
  }

  function onDragLeave(e) {
    document.getElementById('sm-drop-zone').classList.remove('drag-over');
  }

  function onDrop(e) {
    e.preventDefault();
    document.getElementById('sm-drop-zone').classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (!file) return;
    if (!file.name.endsWith('.json')) {
      showToast('❌', 'Archivo inválido', 'Solo se aceptan archivos .json', '#ff4757');
      return;
    }
    readFile(file);
  }

  // ── File input handler ──
  function onFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    readFile(file);
    e.target.value = '';
  }

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => processJSON(e.target.result);
    reader.onerror = () => showToast('❌', 'Error de lectura', 'No se pudo leer el archivo.', '#ff4757');
    reader.readAsText(file);
  }

  // ── Reset ──
  function confirmReset() {
    document.getElementById('confirm-overlay').classList.add('open');
  }

  function executeReset() {
    document.getElementById('confirm-overlay').classList.remove('open');

    // Reset al estado inicial
    state.completedChapters    = 0;
    state.completedChapterIds  = [];
    state.passedExams          = [];
    state.unlockedAchievements = [];
    state.xp                   = 0;
    state.streak               = 0;

    saveState();
    renderBlocks();
    updateProgress();
    renderAchievements();
    updateManagerStats();
    showToast('🔄', 'Progreso reseteado', 'Empezando desde cero.', '#ff4757');
  }

  // ── Actualizar stats del componente ──
  function updateStats() {
    const el = (id) => document.getElementById(id);

    el('sm-chapters').textContent    = `${state.completedChapters}/10`;
    el('sm-exams').textContent       = `${state.passedExams.length}/5`;
    el('sm-achievements').textContent = `${state.unlockedAchievements.length}/12`;
    el('sm-xp').textContent          = state.xp;

    try {
      const raw = localStorage.getItem('ai_course_state');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed._savedAt) {
          const d = new Date(parsed._savedAt);
          el('sm-saved-at').textContent = d.toLocaleDateString('es', { day:'2-digit', month:'short' });
        } else {
          el('sm-saved-at').textContent = 'Hoy';
        }
      }
    } catch(e) {
      el('sm-saved-at').textContent = '—';
    }
  }

  // API pública
  return {
    export: exportState,
    toggleImportZone: (f) => toggleImportZone(f),
    onDragOver,
    onDragLeave,
    onDrop,
    onFileSelect,
    confirmReset,
    executeReset,
    updateStats
  };
})();

// Alias para llamar desde HTML
function updateManagerStats() { StateManager.updateStats(); }

// Patch saveState para guardar timestamp
const _originalSave = saveState;
function saveState() {
  state._savedAt = new Date().toISOString();
  localStorage.setItem('ai_course_state', JSON.stringify(state));
}

// Cerrar confirm al click fuera
document.getElementById('confirm-overlay').addEventListener('click', function(e) {
  if (e.target === this) this.classList.remove('open');
});

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
renderBlocks();
updateProgress();
renderAchievements();
checkAchievements();
StateManager.updateStats();
setupEventHandlers();

// Auto-open first block
setTimeout(() => {
  const first = document.getElementById('block-b1');
  if (first) first.classList.add('open');
}, 300);

