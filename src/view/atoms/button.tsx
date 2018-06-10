import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { bind } from 'bind-decorator'
import { css, StyleSheet } from 'aphrodite'
import FaTwitter from 'react-icons/lib/fa/twitter'
import * as configs from '../../configs'

export interface IButtonProps {
  onClick?: (event: React.FormEvent<any>) => void,
  type?: string
  fill?: boolean
}

export class Button extends React.Component<IButtonProps, any> {
    render(): JSX.Element {
        return (
            <button
            className={this.buttonClass}
            onClick={this.onClick}
            >
                {this.label}
            </button>
        )
    }

    get buttonClass() {
      if(this.props.type == "tweet") {
	if(this.props.fill) {
	  return css(this.style.tweetFilledButton)
	} else {
	  return css(this.style.tweetButton)
	}
      }
      return css(this.style.button)
    }

    @bind
    onClick(event: React.FormEvent<any>) {
        this.props.onClick && this.props.onClick(event)
    }

    get label() {
        return this.props.children ? this.props.children : 'ボタンラベル'
    }

    get style() {
        return StyleSheet.create({
            button: configs.styles.button,
	    tweetButton: Object.assign({}, configs.styles.tweetButton, {
	      fontWeight: 'lighter',
	    }),
	    tweetFilledButton: configs.styles.tweetFilledButton,
        })
    }

}
