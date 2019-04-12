import cmsService from 'src/module/sw-cms/service/cms.service';
import './component';
import './preview';

cmsService.registerCmsBlock({
    name: 'fancyBlock',
    label: 'FancyBlock',
    component: 'sw-cms-block-fancyBlock',
    previewComponent: 'sw-cms-preview-fancyBlock',
    slots: {
        'text-content': 'text',
        left: 'image',
        center: 'image',
        right: 'image',
        img_bottom: 'image'
    }
});
