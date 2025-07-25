import { Card, Collapse } from 'antd';
import React from 'react';

import { IconStyleType } from '@app/entity/Entity';
import ERModelSidebarPreviewCard from '@app/preview/ERModelSidebarPreviewCard';
import { useEntityRegistry } from '@app/useEntityRegistry';

import { EntityType, ErModelRelationshipCardinality, GlobalTags, GlossaryTerms, Owner } from '@types';

import ermodelrelationshipIcon from '@images/ermodelrelationshipIcon.svg';

const { Panel } = Collapse;

export const ERModelRelationshipPreviewCard = ({
    urn,
    name,
    owners,
    description,
    globalTags,
    glossaryTerms,
    cardinality,
}: {
    urn: string;
    name: string | any;
    description: string | any;
    globalTags?: GlobalTags | null;
    glossaryTerms?: GlossaryTerms | null;
    owners?: Array<Owner> | null;
    cardinality?: ErModelRelationshipCardinality | null;
}): JSX.Element => {
    const entityRegistry = useEntityRegistry();
    const getERModelRelationHeader = (): JSX.Element => {
        return (
            <div style={{ width: '100%', display: 'inline-block' }}>
                <ERModelSidebarPreviewCard
                    url={entityRegistry.getEntityUrl(EntityType.ErModelRelationship, urn)}
                    name={name || ''}
                    urn={urn}
                    description={description || ''}
                    logoComponent={
                        <img
                            src={ermodelrelationshipIcon}
                            alt={entityRegistry.getEntityName(EntityType.ErModelRelationship)}
                            style={{ fontSize: '20px' }}
                        />
                    }
                    tags={globalTags || undefined}
                    glossaryTerms={glossaryTerms || undefined}
                    owners={owners}
                    type={entityRegistry.getEntityName(EntityType.ErModelRelationship)}
                    typeIcon={entityRegistry.getIcon(EntityType.ErModelRelationship, 14, IconStyleType.ACCENT)}
                    titleSizePx={18}
                    cardinality={cardinality}
                />
            </div>
        );
    };

    return (
        <>
            <Card className="cardStyle" bordered key={`${urn}_1`}>
                <Panel header={getERModelRelationHeader()} key={`${urn}_2`} />
            </Card>
        </>
    );
};
