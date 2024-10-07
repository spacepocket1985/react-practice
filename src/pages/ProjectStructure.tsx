import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { codeForProjectStructure } from './dataForPages/dataProjectStructure';

export const ProjectStructure: React.FC = () => {
  const { Text, Title, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        Типичная структура проекта React, созданного с помощью Vite и
        TypeScript, может выглядеть следующим образом:
      </Paragraph>
      <CodeEditor code={codeForProjectStructure.project}></CodeEditor>
      <Title level={3}>🍅package.json</Title>
      <CodeEditor code={codeForProjectStructure.packageJson}></CodeEditor>
      <Paragraph>
        <Text strong mark>
          ⚠️ Package.json
        </Text>{' '}
        - это своего рода 💙сердце проекта React. Он содержит всю важную
        информацию о проекте, его зависимостях, настройках и скриптах. Этот файл
        помогает управлять зависимостями, автоматизировать задачи и поддерживать
        порядок в проекте.
      </Paragraph>
    </>
  );
};
