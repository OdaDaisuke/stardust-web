import * as React from 'react'
import { bind } from 'bind-decorator'
import { css, StyleSheet } from 'aphrodite'
import FaTwitter from 'react-icons/lib/fa/twitter'
import { utils } from '../styles'

export interface IBadgeButtonProps {
  onClick?: (event: React.FormEvent<any>) => void,
  type?: string
  fill?: boolean
  className?: string
}

export class BadgeButton extends React.Component<IBadgeButtonProps, any> {
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
        return [
            css(this.styles.tweetButton),
            this.props.className || "",
        ].join(' ')
    }

    @bind
    onClick(event: React.FormEvent<any>) {
        this.props.onClick && this.props.onClick(event)
    }

    get label() {
        return this.props.children ? this.props.children : ''
    }

    get styles() {
        return StyleSheet.create({
            tweetButton: Object.assign({}, utils.tweetButton, {
                fontWeight: 200,
            }),
        })
    }

}