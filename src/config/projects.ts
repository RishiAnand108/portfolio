/**
 * Projects shown as cards on the homepage. One object per project.
 *
 * Links:
 *   - a URL            → rendered as a link
 *   - the string 'TODO' → rendered as a visible, disabled placeholder
 *   - omit the key      → nothing rendered (e.g. a library with no live demo)
 *
 * Status is optional. Leave it out until you know it: 'live' (deployed and
 * usable), 'building' (in progress) or 'planned' (not started).
 *
 * Descriptions are one or two lines. There are no case-study pages, so keep
 * anything longer for the repository itself.
 */
import type { ProjectCategory } from './categories';

export type ProjectStatus = 'live' | 'building' | 'planned';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  status?: ProjectStatus;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'airaware',
    title: 'AirAware',
    description:
      "Forecasts NO2 and O3 levels 1 to 48 hours ahead for eight Indian metros, with calibrated uncertainty intervals and a system that declines to forecast when its inputs don't support one.",
    category: 'ai-ml-full-stack',
    tech: ['Python', 'XGBoost', 'FastAPI', 'Streamlit', 'MLflow', 'Docker'],
    github: 'https://github.com/RishiAnand108/AirAware',
  },
  {
    id: 'cardiorhythm-ai',
    title: 'CardioRhythm-AI',
    description:
      'Research prototype for real-time arrhythmia detection from wearable-style ECG streams, built around a compact CNN-LSTM quantized to TensorFlow Lite for edge deployment. Not a medical device.',
    category: 'ai-ml-healthcare',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Next.js', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com/RishiAnand108/CardioRhythm-AI',
  },
];
