import cn from 'classnames';

export const Tabs = ({
  tabs,
  activeTabId,
  onTabSelected,
  onActiveTitle = () => {},
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === activeTabId })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== activeTabId) {
                    onTabSelected(tab.id);
                    onActiveTitle(tab.title);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabId).content || tabs[0].content}
      </div>
    </div>
  );
};
