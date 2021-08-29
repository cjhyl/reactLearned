function ErrorTip (options) {
  return <div className={['tooltip','tooltip-error','fade','in',options.pos||'right'].join(' ')}>
  <div className="tooltip-arrow tooltip-arrow-border" style={{top: '50%'}}></div>
  <div className="tooltip-arrow tooltip-arrow-bg" style={{top: '50%'}}></div>
  <div className="tooltip-inner">
    <i className="iconfont ic-error"></i>
    <span dangerouslySetInnerHTML={{__html:options.tip}}></span>
  </div>
</div>
}
export default ErrorTip