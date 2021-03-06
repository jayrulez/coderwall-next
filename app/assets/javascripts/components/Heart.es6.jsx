class Heart extends React.Component {
  render() {
    let classes = {
      root:  'heart no-hover',
      icon:  'purple',
      count: 'diminish font-tiny',
      inline: ''
    }
    if (this.props.layout === 'inline') {
      classes = {
        root:  'heart no-hover font-x-lg',
        icon:  'inline purple',
        count: 'inline ml1 diminish bold',
        inline: 'inline'
      }
    }
    if (this.props.layout === 'simple') {
      classes = {
        root:  'heart pointer',
        icon:  'purple',
        count: 'hide',
        inline: 'inline'
      }
    }
    return (
      <div className='inline'>
        <a className={classes.root} onClick={() => this.props.onClick()}>
          <center className={classes.inline}>
            {this.renderHeartState(classes.icon)}
          </center>
          <div className={classes.count}>
            <center className={classes.inline} itemScope timetype='upvoteCount'>
              {this.numberToHuman(this.props.count)}
            </center>
          </div>
        </a>
      </div>
    )
  }

  renderHeartState(classes) {
    if (!this.props.hearted) {
      if(this.props.layout === 'simple')
      {
        return <span>Like?</span>
      }
      else
      {
        return <div className={classes + ' pointer'}>
          <i className={classes + ' pointer fa fa-heart-o'} />
        </div>
      }
    }

    return <div className={classes + ' hearted default-cursor'}>
      <i className="fa fa-heart" />
    </div>
  }

  numberToHuman(number) {
    if(number > 0)
    {
      const s = ['', 'K', 'M']
      var e = Math.floor(Math.log(number) / Math.log(1000))
      return (number / Math.pow(1000, e)).toFixed(0) + s[e]
    }
    else {
      return 0
    }
  }
}

Heart.propTypes = {
  count: React.PropTypes.number,
  hearted: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  layout: React.PropTypes.string,
}
