import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { codeOnProjectStructure } from './dataForPages/dataProjectStructure';

export const ProjectStructure: React.FC = () => {
  const { Text, Title, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        Типичная структура проекта React, созданного с помощью Vite и
        TypeScript, может выглядеть следующим образом:
      </Paragraph>
      <CodeEditor code={codeOnProjectStructure.project}></CodeEditor>
      <Title>🍅package.json</Title>
      <CodeEditor code={codeOnProjectStructure.packageJson}></CodeEditor>
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
