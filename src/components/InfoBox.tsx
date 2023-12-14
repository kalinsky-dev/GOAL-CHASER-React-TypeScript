import { ReactNode } from 'react';

interface IHintBoxProps {
  mode: 'hint';
  children: ReactNode;
}

interface IWarningBoxProps {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
}

// interface IInfoBoxProps {
//   mode: 'hint' | 'warning';
//   severity?: 'low' | 'medium' | 'high';
//   children: ReactNode;
// }

const InfoBox = (props: IHintBoxProps | IWarningBoxProps) => {
  //info, warning
  const { children, mode } = props;
  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
