"use client";

import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { BaseCardProps } from "./base-card.model";
import BaseIcon from "../base-icon/base-icon.component";

const BaseCard = (props: BaseCardProps) => {

    const { title, imageUrl, description, icon, action } = props;

    return (
        <Card>
            {imageUrl && (
                <CardMedia
                    sx={{ height: 140 }}
                    image={imageUrl}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {icon && <BaseIcon {...icon} />}
                    {title}
                </Typography>
                {description && (
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                )}
            </CardContent>
            {action && (
                <CardActions>
                    <Link href={`/${action.redirect}`}>{action.text}</Link>
                </CardActions>
            )}
        </Card>
    );
}

export default BaseCard;