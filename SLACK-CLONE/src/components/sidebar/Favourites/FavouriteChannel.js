import React from 'react';
import { connect } from 'react-redux';
import { setChannel } from "../../../store/actioncreator"

import { Menu, Icon } from 'semantic-ui-react';

const FavouriteChannels = (props) => {

    const displayChannels = () => {
        if (Object.keys(props.favouriteChannels).length > 0) {
            return Object.keys(props.favouriteChannels).map((channelId) => {
                return <Menu.Item
                    key={channelId}
                    name={props.favouriteChannels[channelId]}
                    onClick={() => props.selectChannel({ id: channelId, name: props.favouriteChannels[channelId] , isFavourite : true })}
                    active={props.channel && channelId === props.channel.id && props.channel.isFavourite}
                >
                    {"# " + props.favouriteChannels[channelId]}
                </Menu.Item>
            })
        }
    } 

    return <Menu.Menu >
        <Menu.Item style={{ fontSize: '17px' }}>
            <span>
                <Icon name="star" /> Starred
            </span>
            ({Object.keys(props.favouriteChannels).length})
        </Menu.Item>
        {displayChannels()}
    </Menu.Menu>
}

const mapStateToProps = (state) => {
    return {
        channel: state.channel.currentChannel,
        favouriteChannels: state.favouriteChannel.favouriteChannel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectChannel: (channel) => dispatch(setChannel(channel))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteChannels);