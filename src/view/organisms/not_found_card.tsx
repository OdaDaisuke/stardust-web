import * as React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { bind } from 'bind-decorator'
import { LyricService } from '../../domain'
import { LyricProps } from '../../data'
import { LyricCard } from '../molecules'

export interface INotFoundCard {
  vm: NotFoundCardVM
}

@observer
export class NotFoundCard extends React.Component<INotFoundCard, any> {
  constructor(props: INotFoundCard) {
    super(props)
    this.props.vm.initialize()
    this.props.vm.getNotFoundLyric()
  }

  render(): JSX.Element {
    return (
      <div>
	<LyricCard
	  title={this.lyricTitle}
	  content={this.lyricContent}
	  singer={this.lyricSinger}
	  url={this.lyricUrl}
	/>
      </div>
    )
  }

  get lyricTitle() {
    return this.lyric("Title")
  }

  get lyricContent() {
    return this.lyric("Content")
  }

  get lyricSinger() {
    return this.lyric("Singer")
  }

  get lyricUrl() {
    return this.lyric("Url")
  }

  private lyric(key: string) {
    if(!this.props.vm.notFoundLyric) {
      return ""
    }
    return this.props.vm.notFoundLyric.$mobx.values[0][key]
  }
}

export class NotFoundCardVM {
  private lyricService: LyricService | null = null

  @observable
  notFoundLyric: any = null

  initialize() {
    this.lyricService = new LyricService()
  }

  getNotFoundLyric() {
    if(!this.lyricService) {
      return null
    }
    this.lyricService.getNotFoundLyric(this.callback)
  }

  @bind
  callback(lyric: any) {
    this.notFoundLyric = lyric
  }

}
