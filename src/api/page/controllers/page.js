'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({strapi}) => ({
    async findBySlug(ctx) {
        return await strapi.db.query('api::page.page').findOne({
            where: { slug: ctx.params.slug },
            populate: [
                '*',
                'hero',
                'hero.heroImage',
                'hero.button',
                'contentSection',
                'contentSection.cardItems',
                'contentSection.cardItems.cardImage',
                'ctaPanels',
                'ctaPanels.image'
            ],
        });
    }
}));
