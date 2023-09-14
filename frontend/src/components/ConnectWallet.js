


export function ConnectWallet({connect}){

        return (
            <div className="container">
                <div>Please connect to your wallet to enter this application.</div>
                <br />
                <div>
                    <button onClick={connect} className="action-button">
                        Connect to wallet
                    </button>
                </div>
            </div>
        )
}