import { List, Typography } from 'antd';

export type DataListPropsType = {
  header: string;
  footer?: string;
  listData: string[];
};

export const DataList: React.FC<DataListPropsType> = ({
  header,
  footer,
  listData,
}) => {
  const { Text, Title } = Typography;
  return (
    <List
      style={{ backgroundColor: '#eae5e5', display: 'inline-block' }}
      header={<Title level={5}>{`📢 ${header}`}</Title>}
      footer={footer ? <Title level={5}>{`😻${footer}`}</Title> : null}
      bordered
      dataSource={listData}
      renderItem={(item) => (
        <List.Item>
          <Text mark>😸</Text> {item}
        </List.Item>
      )}
    />
  );
};
