import './DropDown.scss';
import getDropDownContent from '../../utils/helpers/getDropDownContent';
import { store } from '../../App';
import { useContext } from 'react';

export default function DropDown() {
  const [state, dispatch] = useContext(store);
  const contet = getDropDownContent(state);

  return (
    <div
      className={`dropdown-menu ${
        state.section === 'finder'
          ? 'finder'
          : state.section === 'file'
            ? 'file'
            : state.section === 'edit'
              ? 'edit'
              : state.section === 'view'
                ? 'view'
                : state.section === 'go'
                  ? 'go'
                  : state.section === 'window'
                    ? 'window'
                    : state.section === 'help'
                      ? 'help'
                      : ''
      }`}
    >
      {contet.map((item, index) => {
        if (item.name === 'divider') {
          return <div className="divider" />;
        }
        return (
          <div
            className={`dropdown-item ${item.available ? 'selectable' : 'unselectable'}`}
            style={{
              color: item.available ? '#ffff' : 'rgba(255, 255, 255, 0.55)',
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
