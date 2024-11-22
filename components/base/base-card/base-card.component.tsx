"use client";

import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import BaseIcon from "../base-icon/base-icon.component";
import { BaseCardProps } from "./base-card.model";

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
                    {action}
                </CardActions>
            )}
        </Card>
    );
};

export default BaseCard;
