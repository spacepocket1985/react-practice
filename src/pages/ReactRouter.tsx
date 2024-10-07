import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { CodeForRouter } from './dataForPages/dataRouter';

export const ReactRouter: React.FC = () => {
  const { Title, Text, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        Основная цель роутинга в веб-приложениях заключается в том, чтобы
        позволить пользователям перемещаться по различным частям приложения{' '}
        <Text strong type="danger">
          БЕЗ ПЕРЕЗАГРУЗКИ страницы.
        </Text>{' '}
        Вместо того, чтобы каждый раз отправлять запрос на сервер и загружать
        новую страницу, роутинг позволяет динамически обновлять только
        необходимые компоненты или данные в соответствии с выбранным маршрутом.
      </Paragraph>
      <Paragraph>
        Кроме того, роутинг обеспечивает возможность передачи параметров через
        URL, что позволяет приложению динамически адаптироваться к разным
        условиям и сценариям использования. Например, приложение может
        отображать разные данные или компоненты на основе параметров маршрута,
        таких как идентификатор пользователя или идентификатор записи.
      </Paragraph>
      <Title level={4}>📐Основные компоненты</Title>
      <Paragraph>
        <Text mark strong>
          BrowserRouter:
        </Text>{' '}
        Этот компонент оборачивает ваше приложение и использует HTML5 историю
        для управления маршрутизацией.
      </Paragraph>
      {<CodeEditor code={CodeForRouter.browserRouter}></CodeEditor>}
      <Paragraph>
        <Text mark strong>
          Routes:
        </Text>{' '}
        Этот компонент используется для определения группы маршрутов. Он
        является контейнером для компонентов Route.
      </Paragraph>
      {<CodeEditor code={CodeForRouter.routes}></CodeEditor>}
      <Paragraph>
        <Text mark strong>
          Route:
        </Text>{' '}
        Этот компонент определяет отдельный маршрут. Атрибут path указывает URL,
        а element — компонент, который будет рендериться.
      </Paragraph>
      {<CodeEditor code={CodeForRouter.route}></CodeEditor>}
      <Paragraph>
        <Text mark strong>
          Link:
        </Text>{' '}
        Этот компонент используется для навигации между маршрутами. Он заменяет
        теги {`<a>`} в React-приложении.
      </Paragraph>
      {<CodeEditor code={CodeForRouter.link}></CodeEditor>}
      <Paragraph>
        <Text mark strong>
          Outlet:
        </Text>{' '}
        Этот компонент используется для рендеринга вложенных маршрутов. Он
        позволяет создавать иерархическую навигацию.
      </Paragraph>
      {<CodeEditor code={CodeForRouter.outlet}></CodeEditor>}
      <Title level={4}>✒️Основные хуки</Title>
      <Paragraph>
        <Text mark strong>
          useParams:
        </Text>{' '}
        Используется для извлечения параметров URL в компонентах маршрутов.
      </Paragraph>
      {<CodeEditor code={CodeForRouter.useParams}></CodeEditor>}
      <Paragraph>
        <Text mark strong>
          useNavigate:
        </Text>{' '}
        Позволяет программно изменять маршрут. Это может быть полезно для
        навигации после выполнения действий.
      </Paragraph>
      {<CodeEditor code={CodeForRouter.useNavigate}></CodeEditor>}
      <Paragraph>
        <Text mark strong>
          useLocation:
        </Text>{' '}
        Предоставляет информацию о текущем URL, такой как pathname и состояние.
      </Paragraph>
      {<CodeEditor code={CodeForRouter.useLocation}></CodeEditor>}
      <Paragraph>
        <Text mark strong>
          useRoutes:
        </Text>{' '}
        Позволяет определять маршруты в виде массива, что может быть удобно для
        управления маршрутами в более сложных приложениях.
      </Paragraph>
      {<CodeEditor code={CodeForRouter.useRoutes}></CodeEditor>}
      <Paragraph>
        <Text mark strong>
          useSearchParams
        </Text>{' '}
        Чтобы использовать useSearchParams, вам нужно импортировать его из
        react-router-dom. Вот пример того, как вы можете использовать его для
        извлечения и изменения параметров поискового запроса.
      </Paragraph>
      {<CodeEditor code={CodeForRouter.useSearchParams}></CodeEditor>}
    </>
  );
};
