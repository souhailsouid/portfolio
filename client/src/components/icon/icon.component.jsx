import React from 'react'

export const HeartIcon = (props) =>
    <i class={props.selection ?
        "fas fa-heart-broken"
        : "fa fa-heart"}
        aria-hidden="true"
        style={{ fontSize: props.style ? '1.875rem' : '' }}
    />

export const ShoppingIcon =
    <i class="fas fa-shopping-cart"
        style={{ marginTop: 'auto', marginBottom: 'auto' }}>
    </i>