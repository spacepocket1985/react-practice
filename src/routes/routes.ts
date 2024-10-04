import { Components } from '../pages/Components';
import { Context } from '../pages/Context';
import { Events } from '../pages/Events';
import { LifeCycle } from '../pages/LifeCycle';
import { ProjectStructure } from '../pages/ProjectStructure';
import { Props } from '../pages/Props';
import { RefsAndOther } from '../pages/RefsAndOther';
import { State } from '../pages/State';
import { VirtualDom } from '../pages/VirtualDom';

export const routes = [
  {
    menuDescription: 'Структура проекта',
    description: 'Структура проекта',
    path: '/project-structure',
    Page: ProjectStructure,
  },
  {
    menuDescription: 'Virtual Dom',
    description: '🏠Введение в VirtualDOM',
    path: '/virtual-dom',
    Page: VirtualDom,
  },

  {
    menuDescription: 'Components',
    description: '🏭Components',
    path: '/components',
    Page: Components,
  },

  {
    menuDescription: 'Props',
    description: 'Что такое пропсы и зачем они нужны',
    path: '/props',
    Page: Props,
  },
  {
    menuDescription: 'State (useState)',
    description: 'State (useState)',
    path: '/state',
    Page: State,
  },
  {
    menuDescription: 'LifeCycle (useEffect)',
    description: 'LifeCycle (useEffect)',
    path: '/lifeCycle',
    Page: LifeCycle,
  },
  {
    menuDescription: 'Events',
    description: 'Events и как работать с ними',
    path: '/events',
    Page: Events,
  },
  {
    menuDescription: 'Refs, key, memo…',
    description: 'Refs, Fragment, key, React.memo, useMemo, …',
    path: '/refs-and-other',
    Page: RefsAndOther,
  },
  {
    menuDescription: 'Context (useContext)',
    description: 'Context (useContext)',
    path: '/context',
    Page: Context,
  },
];
