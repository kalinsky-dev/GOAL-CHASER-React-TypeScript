import { ReactNode } from 'react';

interface IInfoBoxProps {
  mode: 'hint' | 'warning';
  severity?: 'low' | 'medium' | 'high';
  children: ReactNode;
}

const InfoBox = ({ mode, severity, children }: IInfoBoxProps) => {
  //info, warning
  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
