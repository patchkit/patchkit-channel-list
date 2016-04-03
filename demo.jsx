import React from 'react'
import ChannelList from './index'

const channels = [
  { name: 'apples' },
  { name: 'bananas' },
  { name: 'carrots' }
]

export default class ChannelListDemo extends React.Component {
  render() {
    const onSelect = c => console.log('selected', c)
    return <div>
      <h1>patchkit-channel-list</h1>
      <section className="demo-channel-list">
        <header>&lt;ChannelList channels="..."&gt;</header>
        <div className="content">
          <div style={{width: 280}}><ChannelList channels={channels} onSelect={onSelect} /></div>
        </div>
      </section>
    </div>
  }
}