import React from "react";

const WithLazyLoad = (WrappedComponent: React.ComponentType<any>) =>
    class HOC extends React.Component {
        public render() {
            return (
                <React.Suspense fallback={<div>正在加载中...</div>}>
                    <WrappedComponent {...this.props} />
                </React.Suspense>
            )
        }
    }

export default WithLazyLoad;