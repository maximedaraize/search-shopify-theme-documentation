import { Action, ActionPanel, List, Color } from "@raycast/api";
import { docList } from "./docs";

export default function UserSearchRoot() {
  return (
    
    <List
      isShowingDetail
      searchBarPlaceholder="Type to filter the search results"
      filtering={{ keepSectionOrder: true }}
      throttle
    >
      {docList.map((docsItem, k: number) => (
        <List.Section
          title={docsItem?.section?.sectionTitle}
          key={k}>
          {docsItem?.section?.items.map((item, key: number) => (
            <List.Item
              key={key}
              title={item.title}
              keywords={item.keyword}
              accessories={ item.isDeprecated ? [{ tag: { value: "Deprecated", color: Color.Yellow }}] : null }
              icon="shopify-icon.png"
              detail={
                <List.Item.Detail
                  markdown={'## ' + item.title + '\n' + item.description}
                  metadata={
                    <List.Item.Detail.Metadata>
                      {item.category ?
                        <List.Item.Detail.Metadata.TagList title="Category">
                          <List.Item.Detail.Metadata.TagList.Item text={item.category} color={item.category === 'Basics' ? Color.Blue : item.category === 'Tags' ? Color.Orange : item.category === 'Filters' ? Color.Green : item.category === 'Objects' ? Color.Magenta : null} />
                        </List.Item.Detail.Metadata.TagList>
                        : null }
                      {item.subcategory ?
                        <List.Item.Detail.Metadata.TagList title="Subcategory">
                          <List.Item.Detail.Metadata.TagList.Item text={item.subcategory} color={Color.PrimaryText} />
                        </List.Item.Detail.Metadata.TagList>
                        : null}
                      {item.category === 'Objects' && item.objectProperties && item.objectProperties.length > 0 ?
                        <List.Item.Detail.Metadata.Separator/>
                        : null}
                      {item.category === 'Objects' && item.objectProperties && item.objectProperties.length > 0 ?
                        <List.Item.Detail.Metadata.Label title="Properties" />
                        : null}
                      {item.category === 'Objects' && item.objectProperties && item.objectProperties.length > 0 ?
                        item.objectProperties.map(({name, type}: any) => (
                          <List.Item.Detail.Metadata.Label title={name ? name : ''} text={type ? type : ''} />
                        ))
                      : null}
                      {item.category === 'Objects' && item.objectPropertiesDeprecated && item.objectPropertiesDeprecated.length > 0 ?
                        <List.Item.Detail.Metadata.Separator/>
                        : null}
                      {item.category === 'Objects' && item.objectPropertiesDeprecated && item.objectPropertiesDeprecated.length > 0 ?
                        <List.Item.Detail.Metadata.Label title="Deprecated Properties" />
                        : null}
                      {item.category === 'Objects' && item.objectPropertiesDeprecated && item.objectPropertiesDeprecated.length > 0 ?
                        item.objectPropertiesDeprecated.map(({name, type}: any) => (
                          <List.Item.Detail.Metadata.Label title={name ? name : ''} text={type ? type : ''} />
                        ))
                      : null}
                    </List.Item.Detail.Metadata>
                  }
                />
              }
              actions={
                <ActionPanel title={item.url}>
                  <Action.OpenInBrowser url={item.url} title="Open in Browser" />
                </ActionPanel>
              }
            />
          ))}
        </List.Section>
      ))}
    </List>
  );
}
