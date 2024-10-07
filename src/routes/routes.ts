import { Components } from '../pages/Components';
import { Context } from '../pages/Context';
import { Events } from '../pages/Events';
import { Forms } from '../pages/Forms';
import { Hoc } from '../pages/Hoc';
import { LifeCycle } from '../pages/LifeCycle';
import { ProjectStructure } from '../pages/ProjectStructure';
import { Props } from '../pages/Props';
import { ReactMemo } from '../pages/ReactMemo';
import { ReactRouter } from '../pages/ReactRouter';
import { RefsAndOther } from '../pages/RefsAndOther';
import { State } from '../pages/State';
import { Storages } from '../pages/Storages';
import { UseCallback } from '../pages/useCallback';
import { VirtualDom } from '../pages/VirtualDom';

export const routes = [
  {
    menuDescription: 'Project structure',
    description: '🏩Структура проекта',
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
    description: '🏭Основы компонентов в React',
    path: '/components',
    Page: Components,
  },

  {
    menuDescription: 'Props',
    description: '🎃Что такое пропсы и зачем они нужны',
    path: '/props',
    Page: Props,
  },
  {
    menuDescription: 'State (useState)',
    description: '💰Управление состоянием с использованием useState',
    path: '/state',
    Page: State,
  },
  {
    menuDescription: 'LifeCycle (useEffect)',
    description: '🎂Жизненный цикл компонентов с useEffect и без',
    path: '/lifeCycle',
    Page: LifeCycle,
  },
  {
    menuDescription: 'Events',
    description: '❔Events и как работать с ними.',
    path: '/events',
    Page: Events,
  },
  {
    menuDescription: 'Refs, Fragment, key',
    description: '🎪Использование Refs, Fragment и ключей в React',
    path: '/refs-and-other',
    Page: RefsAndOther,
  },
  {
    menuDescription: 'React.memo, useMemo',
    description: '💾Оптимизация производительности с React.memo и useMemo',
    path: '/reactMemo',
    Page: ReactMemo,
  },
  {
    menuDescription: 'useCallback',
    description: '☎️Оптимизация функций с использованием useCallback',
    path: '/useCallback',
    Page: UseCallback,
  },

  {
    menuDescription: 'Context (useContext)',
    description:
      '🎈Управление глобальным состоянием с использованием Context и useContext',
    path: '/context',
    Page: Context,
  },
  {
    menuDescription: 'React Router',
    description: '🚦Роутинг в React с помощью React Router V6',
    path: '/reactRouter',
    Page: ReactRouter,
  },
  {
    menuDescription: 'Forms',
    description: '📰Формы и их обработка в React',
    path: '/forms',
    Page: Forms,
  },
  {
    menuDescription: 'STORAGEs',
    description:
      '📕Про STORAGEs (Local Storage, Session Storage, Local Forage…)',
    path: '/storages',
    Page: Storages,
  },
  {
    menuDescription: 'HOC',
    description: '🎨HOС (Higher-Order Components)',
    path: '/hoc',
    Page: Hoc,
  },
];
